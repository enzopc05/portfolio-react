import { useState, useCallback } from "react";

/**
 * Hook personnalisé pour gérer les notifications Toast
 *
 * Usage:
 * const { toast, showToast } = useToast();
 * showToast('Message envoyé !', 'success');
 *
 * Dans le JSX:
 * {toast.isVisible && (
 *   <Toast
 *     message={toast.message}
 *     type={toast.type}
 *     isVisible={toast.isVisible}
 *     onClose={hideToast}
 *     position="top-right"
 *     duration={3000}
 *   />
 * )}
 */
const useToast = () => {
  const [toast, setToast] = useState({
    isVisible: false,
    message: "",
    type: "info", // 'success', 'error', 'warning', 'info'
  });

  const showToast = useCallback((message, type = "info") => {
    setToast({
      isVisible: true,
      message,
      type,
    });
  }, []);

  const hideToast = useCallback(() => {
    setToast((prev) => ({
      ...prev,
      isVisible: false,
    }));
  }, []);

  return {
    toast,
    showToast,
    hideToast,
  };
};

export default useToast;
