(function() {
  console.debug('custom Outer script');
  const rootElement = document.getElementById('app');
  const testElement = document.createElement('div');
  const content = 'This is added by custom Outer script'
  testElement.textContent = content;
  testElement.className = 'bg-green-900 text-white';
  return rootElement.appendChild(testElement);
})();