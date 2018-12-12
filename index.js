module.exports = function (el, binding) {
    el.display = binding.value ? 'none' : '';
}
