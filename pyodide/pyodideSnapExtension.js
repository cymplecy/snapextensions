(async function () {
    window.pyodide = await loadPyodide();
})()


SnapExtensions.primitives.set(
    "pyo_runCode(code)",
    function(code){return pyodide.runPython(code);}
);
