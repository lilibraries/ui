import React, { createContext, FC, ReactNode, useContext, useMemo, useRef, useState } from "react";
import warning from "warning";
import { usePersist } from "@lilib/hooks";
import { EffectTarget } from "@lilib/utils";
import Portal from "../Portal";
import IntervalNotice, { NoticeHookOptions } from "./InternalNotice";

export * from "./InternalNotice";

export interface NoticeProps {
  children: ReactNode;
  container?: EffectTarget<HTMLElement>;
}

interface NoticeStateItem {
  id: number;
  open: boolean;
  options: NoticeHookOptions;
}

interface NoticeContextValue {
  mounted: boolean;
  openNotice: (options: NoticeHookOptions) => number;
  closeNotice: (id: number) => void;
  updateNotice: (id: number, options: NoticeHookOptions) => void;
}

const NoticeContext = createContext<NoticeContextValue>({
  mounted: false,
  openNotice: () => -1,
  closeNotice: () => {},
  updateNotice: () => {},
});

const useNotice = () => {
  const context = useContext(NoticeContext);

  warning(context.mounted, "The `useNotice` hook must be used in the Notice component.");

  const openNotice = usePersist((options: NoticeHookOptions) => {
    const id = context.openNotice(options);

    const closeNotice = () => {
      context.closeNotice(id);
    };

    const updateNotice = (options: NoticeHookOptions) => {
      context.updateNotice(id, options);
    };

    return { closeNotice, updateNotice };
  });

  return openNotice;
};

const Notice: FC<NoticeProps> & {
  useNotice: typeof useNotice;
} = (props) => {
  const { children, container } = props;

  const idRef = useRef(0);
  const [notices, setNotices] = useState<NoticeStateItem[]>([]);

  // const topNotices = notices.filter((notice) => notice.options.placement === "top");
  // const topStartNotices = notices.filter((notice) => notice.options.placement === "top-start");
  // const topEndNotices = notices.filter((notice) => notice.options.placement === "top-end");
  // const bottomNotices = notices.filter((notice) => notice.options.placement === "bottom");
  // const bottomStartNotices = notices.filter((notice) => notice.options.placement === "bottom-start");
  // const bottomEndNotices = notices.filter((notice) => notice.options.placement === "bottom-end");

  const openNotice = usePersist((options: NoticeHookOptions) => {
    const id = idRef.current++;
    setNotices((notices) => [...notices, { id, open: true, options }]);
    return id;
  });

  const closeNotice = usePersist((id: number) => {
    setNotices((notices) =>
      notices.map((notice) => {
        if (notice.id === id) {
          return { ...notice, open: false };
        }
        return notice;
      })
    );
  });

  const updateNotice = usePersist((id: number, options: NoticeHookOptions) => {
    setNotices((notices) =>
      notices.map((notice) => {
        if (notice.id === id) {
          return { ...notice, options: { ...notice.options, ...options } };
        }
        return notice;
      })
    );
  });

  const removeNotice = usePersist((id: number) => {
    setNotices((notices) => notices.filter((notice) => notice.id !== id));
  });

  const renderNotices = usePersist((notices: NoticeStateItem[]) => {
    return notices.map((notice) => {
      const { id, open, options } = notice;
      const { onClose, onClosed, ...props } = options;

      const handleClose = () => {
        onClose?.();
        closeNotice(id);
      };

      const handleClosed = () => {
        onClosed?.();
        removeNotice(id);
      };

      return <IntervalNotice {...props} key={id} open={open} onClose={handleClose} onClosed={handleClosed} />;
    });
  });

  const contextValue = useMemo(() => {
    return {
      mounted: true,
      openNotice,
      closeNotice,
      updateNotice,
    };
  }, [openNotice, closeNotice, updateNotice]);

  return (
    <NoticeContext.Provider value={contextValue}>
      {children}
      {!!notices.length && <Portal container={container}>{renderNotices(notices)}</Portal>}
    </NoticeContext.Provider>
  );
};

Notice.useNotice = useNotice;

export default Notice;
