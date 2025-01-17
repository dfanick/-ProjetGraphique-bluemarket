<script>
  // URL de l'iframe à afficher
  let iframeUrl = "http://localhost:3000/public/question/18aac05e-926d-4a17-8065-2a4bdcc84849"; // Exemple d'URL de l'iframe
</script>

<style>
  .iframe-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 8px;
  }
  
  .iframe-container iframe {
    border: none;
    border-radius: 8px;
  }
  
  /* .url-display {
    margin-top: 10px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: #333;
    text-align: center;
  } */
</style>

<div class="iframe-container">
  <iframe src={iframeUrl} width="100%" height="600px" title="Meilleurs Produits Vendus"></iframe>
</div>

<!-- <p class="url-display">URL de l'iframe : {iframeUrl}</p> -->
