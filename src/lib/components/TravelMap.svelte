<script>
    import { onMount, onDestroy } from 'svelte';
  
    // Props
    export let markers = [];
    export let zoom = 2;
    export let center = [20, 0]; 
  
    let mapElement;
    let map;
    let L; 
    let leafletLayerGroup;
    let resizeObserver;
  
    onMount(async () => {
      if (typeof window !== 'undefined') {
        L = (await import('leaflet')).default;
        
        map = L.map(mapElement, {
          center: center,
          zoom: zoom,
          zoomControl: false, 
          attributionControl: false 
        });
  
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; OpenStreetMap &copy; CARTO',
          subdomains: 'abcd',
          maxZoom: 19
        }).addTo(map);
  
        L.control.zoom({ position: 'bottomright' }).addTo(map);
  
        leafletLayerGroup = L.layerGroup().addTo(map);
        updateMarkers();
  
        // FIX: Watch for container size changes (like your slide animation)
        resizeObserver = new ResizeObserver(() => {
          // invalidating size forces Leaflet to recalculate the map container width/height
          if (map) map.invalidateSize(); 
        });
        resizeObserver.observe(mapElement);
      }
    });
  
    onDestroy(() => {
      if (map) map.remove();
      if (resizeObserver) resizeObserver.disconnect();
    });
  
    $: if (map && L && markers) {
      updateMarkers();
    }
  
    function updateMarkers() {
      if (!leafletLayerGroup) return;
      leafletLayerGroup.clearLayers();
  
      markers.forEach(marker => {
        const m = L.marker([marker.lat, marker.long])
          .bindPopup(`
            <div class="popup-content">
              <strong>${marker.name}</strong>
              <br/>
              <span class="click-hint">Click to read post</span>
            </div>
          `);
  
        m.on('mouseover', function () { this.openPopup(); });
        m.on('click', () => { if (marker.url) window.open(marker.url, '_blank'); });
  
        leafletLayerGroup.addLayer(m);
      });
    }
  </script>
  
  <svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
  </svelte:head>
  
  <!-- Note: Removed the min-height here as discussed -->
  <div class="map-container" bind:this={mapElement}></div>
  
  <style>
    .map-container {
      width: 100%;
      height: 100%; 
      background: #f8f9fa;
      border-radius: 8px;
      overflow: hidden;
      z-index: 1;
    }
  
    :global(.leaflet-popup-content-wrapper) {
      border-radius: 4px;
      padding: 0;
      font-family: sans-serif;
    }
  
    :global(.leaflet-popup-content) {
      margin: 12px;
      text-align: center;
    }
  
    :global(.click-hint) {
      font-size: 0.8em;
      color: #666;
    }
  </style>