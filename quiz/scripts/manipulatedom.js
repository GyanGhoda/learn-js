window.onload = function () {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function (colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function createEditTxtNode(txt) {
  let txtNode = document.createElement("input");
  txtNode.value = txt;
  return txtNode;
}
function createEditButtonNode(txt, index) {
  let buttonNode = document.createElement("button");
  buttonNode.innerHTML = "txt";
  return buttonNode;
}

function addTable() {
  const tableNode = document.createElement("table");
  for (let i = 0; i < 3; i++) {
    let col1 = createTDNode(createEditTxtNode("Cell (" + i + ", 0)"));
    tableNode.appendChild(createTRNode([col1]));
    tableNode.appendChild(createTRNode([createEditButtonNode("Edit text", i)]));
  }
  document.getElementById("root").appendChild(tableNode);
}
