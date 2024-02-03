import { useState } from 'react';

export function useDialog() {
  const [triggerRef, setDialogRef] = useState<HTMLDialogElement | null>(null);

  return {
    setDialogRef,
    openDialog: () => {
      triggerRef?.showModal();
    },
    hideDialog: () => {
      triggerRef?.close();
    },
  };
}
