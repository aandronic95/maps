(function() {
    // Region URLs mapping
    const regionUrls = {
        'MDAN': 'https://en.wikipedia.org/wiki/Anenii_Noi_District',
        'MDBA': 'https://en.wikipedia.org/wiki/B%C4%83l%C8%9Bi',
        'MDBS': 'https://en.wikipedia.org/wiki/Basarabeasca_District',
        'MDBD': 'https://en.wikipedia.org/wiki/Bender,_Moldova',
        'MDBR': 'https://en.wikipedia.org/wiki/Briceni_District',
        'MDCA': 'https://en.wikipedia.org/wiki/Cahul_District',
        'MDCL': 'https://en.wikipedia.org/wiki/C%C4%83l%C4%83ra%C8%99i_District',
        'MDCN': 'https://en.wikipedia.org/wiki/Cantemir_District',
        'MDCS': 'https://en.wikipedia.org/wiki/C%C4%83u%C8%99eni_District',
        'MDCH': 'https://en.wikipedia.org/wiki/Chi%C8%99in%C4%83u',
        'MDCM': 'https://en.wikipedia.org/wiki/Cimi%C8%99lia_District',
        'MDCR': 'https://en.wikipedia.org/wiki/Criuleni_District',
        'MDDO': 'https://en.wikipedia.org/wiki/Dondu%C8%99eni_District',
        'MDDR': 'https://en.wikipedia.org/wiki/Drochia_District',
        'MDDU': 'https://en.wikipedia.org/wiki/Dub%C4%83sari_District',
        'MDED': 'https://en.wikipedia.org/wiki/Edine%C8%9B_District',
        'MDFA': 'https://en.wikipedia.org/wiki/F%C4%83le%C8%99ti_District',
        'MDFL': 'https://en.wikipedia.org/wiki/Flore%C8%99ti_District',
        'MDGL': 'https://en.wikipedia.org/wiki/Glodeni_District',
        'MDHI': 'https://en.wikipedia.org/wiki/H%C3%AEnce%C8%99ti_District',
        'MDIA': 'https://en.wikipedia.org/wiki/Ialoveni_District',
        'MDLE': 'https://en.wikipedia.org/wiki/Leova_District',
        'MDNI': 'https://en.wikipedia.org/wiki/Nisporeni_District',
        'MDOC': 'https://en.wikipedia.org/wiki/Ocni%C8%9Ba_District',
        'MDOR': 'https://en.wikipedia.org/wiki/Orhei_District',
        'MDRE': 'https://en.wikipedia.org/wiki/Rezina_District',
        'MDRI': 'https://en.wikipedia.org/wiki/R%C3%AE%C8%99cani_District',
        'MDSI': 'https://en.wikipedia.org/wiki/S%C3%AEngerei_District',
        'MDSO': 'https://en.wikipedia.org/wiki/%C8%98old%C4%83ne%C8%99ti_District',
        'MDSR': 'https://en.wikipedia.org/wiki/Soroca_District',
        'MDSV': 'https://en.wikipedia.org/wiki/%C8%98tefan_Vod%C4%83_District',
        'MDST': 'https://en.wikipedia.org/wiki/Str%C4%83%C8%99eni_District',
        'MDTA': 'https://en.wikipedia.org/wiki/Taraclia_District',
        'MDTE': 'https://en.wikipedia.org/wiki/Telene%C8%99ti_District',
        'MDTN': 'https://en.wikipedia.org/wiki/Transnistria',
        'MDUN': 'https://en.wikipedia.org/wiki/Ungheni_District',
        'MDGA': 'https://en.wikipedia.org/wiki/Gagauzia'
    };
    const regionNames = {
        'MDAN': 'Anenii Noi',
        'MDBA': 'Bălți',
        'MDBS': 'Basarabeasca',
        'MDBD': 'Bender',
        'MDBR': 'Briceni',
        'MDCA': 'Cahul',
        'MDCL': 'Călărași',
        'MDCN': 'Cantemir',
        'MDCS': 'Căușeni',
        'MDCH': 'Chișinău',
        'MDCM': 'Cimișlia',
        'MDCR': 'Criuleni',
        'MDDO': 'Dondușeni',
        'MDDR': 'Drochia',
        'MDDU': 'Dubăsari',
        'MDED': 'Edineț',
        'MDFA': 'Fălești',
        'MDFL': 'Florești',
        'MDGL': 'Glodeni',
        'MDHI': 'Hîncești',
        'MDIA': 'Ialoveni',
        'MDLE': 'Leova',
        'MDNI': 'Nisporeni',
        'MDOC': 'Ocnița',
        'MDOR': 'Orhei',
        'MDRE': 'Rezina',
        'MDRI': 'Rîșcani',
        'MDSI': 'Sîngerei',
        'MDSO': 'Șoldănești',
        'MDSR': 'Soroca',
        'MDSV': 'Ștefan Vodă',
        'MDST': 'Strășeni',
        'MDTA': 'Taraclia',
        'MDTE': 'Telenești',
        'MDTN': 'Transnistria',
        'MDUN': 'Ungheni',
        'MDGA': 'Gagauzia'
    };
    const regionShortNames = {
        'MDAN': 'Anenii Noi',
        'MDBA': 'Bălți',
        'MDBS': 'Basarabeasca',
        'MDBD': 'Bender',
        'MDBR': 'Briceni',
        'MDCA': 'Cahul',
        'MDCL': 'Călărași',
        'MDCN': 'Cantemir',
        'MDCS': 'Căușeni',
        'MDCH': 'Chișinău',
        'MDCM': 'Cimișlia',
        'MDCR': 'Criuleni',
        'MDDO': 'Dondușeni',
        'MDDR': 'Drochia',
        'MDDU': 'Dubăsari',
        'MDED': 'Edineț',
        'MDFA': 'Fălești',
        'MDFL': 'Florești',
        'MDGL': 'Glodeni',
        'MDHI': 'Hîncești',
        'MDIA': 'Ialoveni',
        'MDLE': 'Leova',
        'MDNI': 'Nisporeni',
        'MDOC': 'Ocnița',
        'MDOR': 'Orhei',
        'MDRE': 'Rezina',
        'MDRI': 'Rîșcani',
        'MDSI': 'Sîngerei',
        'MDSO': 'Șoldănești',
        'MDSR': 'Soroca',
        'MDSV': 'Ș.Vodă',
        'MDST': 'Strășeni',
        'MDTA': 'Taraclia',
        'MDTE': 'Telenești',
        'MDTN': 'Transnistria',
        'MDUN': 'Ungheni',
        'MDGA': 'Gagauzia'
    };
    const customPositions = {
        'MDCR': { x: -10, y: -15 }, 
        'MDBD': { x: 0, y: 0 },  
        'MDGA': { x: 10, y: -25 },
        'Transnistria': { x: 25, y: 45 },
        'MDDU': { x: -10, y: -20 },
        'MDTA': { x: -10, y: 10 }
    };
    function getRegionClass(id) {
        return 'region';
    }
    // Get the JSON data URL for your Drupal site
    const jsonUrl = 'https://cdn.jsdelivr.net/gh/aandronic95/maps@main/md.json'; // Adjust this path for your Drupal setup
    fetch(jsonUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(function(moldova) {
            const svg = d3.select('#moldova-map');
            const container = document.querySelector('.moldova-map-container');
            const width = container.clientWidth;
            const height = container.clientHeight;
            svg.attr('width', width).attr('height', height);
            const projection = d3.geoMercator()
                .fitSize([width, height], moldova);
            const path = d3.geoPath()
                .projection(projection);
            svg.selectAll('path')
                .data(moldova.features)
                .enter()
                .append('path')
                .attr('d', path)
                .attr('class', d => getRegionClass(d.properties.id))
                .style('cursor', 'pointer')
                .on('click', function(event, d) {
                    const url = regionUrls[d.properties.id];
                    if (url) {
                        window.open(url, '_blank');
                    }
                });
            svg.selectAll('text')
                .data(moldova.features)
                .enter()
                .append('text')
                .attr('x', d => {
                    const baseX = path.centroid(d)[0];
                    const customPos = customPositions[d.properties.id];
                    return customPos ? baseX + customPos.x : baseX;
                })
                .attr('y', d => {
                    const baseY = path.centroid(d)[1];
                    const customPos = customPositions[d.properties.id];
                    return customPos ? baseY + customPos.y : baseY;
                })
                .attr('dy', '0.35em')
                .each(function(d) {
                    const area = d3.geoArea(d);
                    const bounds = path.bounds(d);
                    const width = bounds[1][0] - bounds[0][0];
                    const height = bounds[1][1] - bounds[0][1];
                    const regionSize = Math.min(width, height);
                    
                    const isSmallRegion = regionSize < 50 || area < 0.001;
                    const regionName = isSmallRegion ? 
                        (regionShortNames[d.properties.id] || d.properties.id) : 
                        (regionNames[d.properties.id] || d.properties.id);
                    
                    const fontSize = isSmallRegion ? 
                        Math.max(6, Math.min(9, regionSize * 0.2)) : 
                        Math.max(9, Math.min(14, regionSize * 0.25));
                    
                    d3.select(this)
                        .attr('class', isSmallRegion ? 'region-label-small' : 'region-label')
                        .style('font-size', fontSize + 'px')
                        .text(regionName);
                    
                    const textLength = this.getComputedTextLength();
                    const maxWidth = width * 0.9; 
                    
                    if (textLength > maxWidth && !isSmallRegion) {
                        const shortName = regionShortNames[d.properties.id] || d.properties.id;
                        d3.select(this)
                            .attr('class', 'region-label-small')
                            .style('font-size', Math.max(6, Math.min(10, fontSize * 0.8)) + 'px')
                            .text(shortName);
                    }
                });
        }).catch(function(error) {
            console.error('Error loading GeoJSON:', error);
            document.querySelector('#moldova-map').innerHTML = '<text x="50%" y="50%" text-anchor="middle" fill="red">Error loading map data</text>';
        });
    // Handle resize
    window.addEventListener('resize', function() {
        // Debounce resize events
        clearTimeout(window.moldovaMapResizeTimeout);
        window.moldovaMapResizeTimeout = setTimeout(function() {
            location.reload();
        }, 300);
    });
})();