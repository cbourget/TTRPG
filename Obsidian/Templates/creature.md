<%*
const name = await tp.system.prompt('Enter Name');

await tp.file.move(`1 - Compendium/Creatures/${name}`);
-%>
<iframe border=0 frameborder=0 style="position: absolute; height: 100%; width: 100%; border: none" src="https://pathfinderdashboard.com/Creatures/<% name %>.html"></iframe>