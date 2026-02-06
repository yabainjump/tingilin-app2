export function skeletonController(delayMs = 150, minMs = 250) {
  let showTimer: any;
  let shownAt = 0;

  return {
    scheduleShow(setVisible: (v: boolean) => void) {
      clearTimeout(showTimer);
      shownAt = 0;
      showTimer = setTimeout(() => {
        shownAt = Date.now();
        setVisible(true);
      }, delayMs);
    },

    async hide(setVisible: (v: boolean) => void) {
      clearTimeout(showTimer);

      if (!shownAt) {
        // skeleton jamais montré
        setVisible(false);
        return;
      }

      const elapsed = Date.now() - shownAt;
      const remaining = Math.max(0, minMs - elapsed);
      if (remaining) await new Promise(r => setTimeout(r, remaining));

      setVisible(false);
    }
  };
}
