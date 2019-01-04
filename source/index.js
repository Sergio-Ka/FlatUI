const requireAllFiles = function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
};

//requireAllFiles(require.context('./blocks/', true, /^\.\/.*\.js$/));
requireAllFiles(require.context('./', true, /^\.\/.*\.(js|styl|css|png|jpg)$/));
  