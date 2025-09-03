import { loadData, filterNodesAndLinks } from './data.js';
import { createGraph, updateGraphData } from './graph.js';
import { setupUI } from './ui.js';
import { applyYearForces } from './forces.js';


let graph, fullGraph, nodes = [], links = [];
let folderLinksActive = false;

function setFolderLinksActive(val) {
  folderLinksActive = val;
  updateGraph();
}

loadData('./data.json').then(data => {
  fullGraph = data;
  graph = createGraph(document.getElementById('3d-graph'));
  setupUI({ graph, fullGraph,updateGraph, setFolderLinksActive, getFolderLinksActive: () => folderLinksActive });
  updateGraph();
  applyYearForces(graph, nodes);
});

function updateGraph() {
  const slider = document.getElementById('dataRange');
  const samplePercent = Number(slider.value);
  ({ nodes, links } = filterNodesAndLinks(fullGraph, samplePercent, folderLinksActive));
  updateGraphData(graph, nodes, links);
}