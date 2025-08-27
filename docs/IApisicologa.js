const supabaseUrl = 'https://ynaezvwhevueigoywvrb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InluYWV6dndoZXZ1ZWlnb3l3dnJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyNTgzMjUsImV4cCI6MjA3MTgzNDMyNX0.mwa7aSsYgLEziKVOLAQJFlxd4_fCiUi74m8JpM1FJf0'
const bd = supabase.createClient(supabaseUrl, supabaseKey)

const intervalo = document.querySelector('.intervalo');
const button = document.querySelector('.butao');

 
button.addEventListener('click', async() =>{
    const entrada = document.getElementById('entrada').value;

    if (entrada.trim() === "") {
        intervalo.textContent = "Por favor, insira algum texto!";
        return;
      }

    intervalo.innerHTML = "Carregando...";
    
    setTimeout(() => {
        intervalo.innerHTML = "É foda ein, mas não desista!";
    }, 3000);

    const { data, error } = await bd
        .from('ia')
        .insert([{ usuario: entrada}])
    if (error) {
        console.error(error)
        entrada.textContent = 'Erro ao enviar. Veja o console.'
      }
});
