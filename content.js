(() => {
  const REQUIRED_CLASS = "skin-sidebar-plugin";
  const ALLOWED_CLASSES = new Set([REQUIRED_CLASS, "show"]);

  function isTargetElement(node) {
    if (!(node instanceof Element) || !node.classList.contains(REQUIRED_CLASS)) {
      return false;
    }

    for (const className of node.classList) {
      if (!ALLOWED_CLASSES.has(className)) {
        return false;
      }
    }

    return true;
  }

  function removeTargetElements(root = document) {
    if (!(root instanceof Element || root instanceof Document || root instanceof DocumentFragment)) {
      return;
    }

    root.querySelectorAll(".skin-sidebar-plugin").forEach((node) => {
      if (isTargetElement(node)) {
        node.remove();
      }
    });
  }

  function removeIfTarget(node) {
    if (isTargetElement(node)) {
      node.remove();
    }
  }

  removeTargetElements();

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "attributes") {
        removeIfTarget(mutation.target);
        return;
      }

      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof Element || node instanceof DocumentFragment)) {
          return;
        }

        removeIfTarget(node);
        removeTargetElements(node);
      });
    });
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
    childList: true,
    subtree: true
  });
})();
