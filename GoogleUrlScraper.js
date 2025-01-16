javascript:(()=>{ 
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms)); 
  const links = new Set(JSON.parse(localStorage.getItem("scrapedLinks") || "[]")); 
  let pageCounter = Number(localStorage.getItem("pageCounter") || 0); 
  const maxPages = 10; 

  const extractLinks = () => { 
    document.querySelectorAll('a').forEach(a => { 
      let href = a.getAttribute('href'); 
      if (href) { 
        try { 
          if (href.startsWith("/url?q=")) { 
            let url = decodeURIComponent(new URL(href, window.location.origin).searchParams.get('q') || ""); 
            if (url && !url.includes('google.com')) { 
              links.add(url); 
            } 
          } else if (href.startsWith("http") && !href.includes("google.com") && !href.includes("webcache.googleusercontent.com")) { 
            links.add(decodeURIComponent(href)); 
          } 
        } catch (e) { 
          console.error("⚠️ Error procesando la URL:", href, e); 
        } 
      } 
    }); 
  };

  const copyLinksToClipboard = async () => { 
    if (links.size > 0) { 
      const textToCopy = Array.from(links).join("\n"); 
      await navigator.clipboard.writeText(textToCopy).then(() => { 
        alert(`Se copiaron ${links.size} URLs al portapapeles.`); 
      }).catch(() => { 
        prompt("Copia las URLs manualmente:", textToCopy); 
      }); 
    } 
  };

  const goToNextPage = async () => { 
    const nextButton = document.querySelector('#pnnext'); 
    if (nextButton && pageCounter < maxPages) { 
      pageCounter++; 
      localStorage.setItem("pageCounter", pageCounter); 
      localStorage.setItem("scrapedLinks", JSON.stringify(Array.from(links))); 
      nextButton.click(); 
    } else { 
      console.log("🚫 Fin de la paginación."); 
      await copyLinksToClipboard(); 
      localStorage.removeItem("scrapedLinks"); 
      localStorage.removeItem("pageCounter"); 
    } 
  };

  const runScript = async () => { 
    console.log(`📄 Procesando página ${pageCounter + 1}...`); 
    extractLinks(); 
    await delay(3000); 
    goToNextPage(); 
  };

  runScript(); 
})();