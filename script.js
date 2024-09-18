function calcular() {
    // Inputs
    let compra = parseFloat(document.getElementById("compra").value);
    let ipi = parseFloat(document.getElementById("ipi").value);
    let cred_icms = parseFloat(document.getElementById("cred_icms").value);
    let frete = parseFloat(document.getElementById("frete").value);
    let desconto = parseFloat(document.getElementById("desconto").value);

    // Cálculos
    let preco_compra_ipi = compra + (compra * (ipi / 100));
    let credito_icms = compra * (cred_icms / 100);
    let preco_venda = preco_compra_ipi - credito_icms;
    let custo_final = preco_venda + frete - (preco_venda * (desconto / 100));
    let margem = preco_venda - custo_final;

    // Exibir Resultados
    document.getElementById("preco_compra").value = preco_compra_ipi.toFixed(2);
    document.getElementById("cred_icms_result").value = credito_icms.toFixed(2);
    document.getElementById("preco_venda").value = preco_venda.toFixed(2);
    document.getElementById("custo_final").value = custo_final.toFixed(2);
    document.getElementById("margem").value = margem.toFixed(2);
}
