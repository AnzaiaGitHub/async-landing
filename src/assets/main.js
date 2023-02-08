const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UC4FHiPgS1KXkUMx3dxBUtPg&part=snippet%2Cid&order=date&maxResults=5";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f9700d0402msh7b8745260ee3995p114684jsnff28d46a585f',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
const content = null||document.getElementById("content");

async function fetchData(urlAPI){
  const response = await fetch(urlAPI,options);
  const data = await response.json();
  return data;
}

(async ()=>{
	try{
		const data = await fetchData(API);
		let view = data.items.map(video=>{
				return `<div class="group relative">
					<div
						class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
						<img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
					</div>
					<div class="mt-4 flex justify-between">
						<h3 class="text-sm text-gray-700">
							<span aria-hidden="true" class="absolute inset-0"></span>
							${video.snippet.title}
						</h3>
					</div>
				</div>`
			}).slice(0,3).join("");
		content.innerHTML = view;
	}catch(err){
		console.log(err);
	}
})();