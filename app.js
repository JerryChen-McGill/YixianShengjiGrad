const starterCards = [
  ['The Dream Lab','research','0 = a lab that drains curiosity · 100 = a lab where everyone can do their best thinking','0 = no shared direction · 100 = a purpose that makes hard weeks worthwhile'],
  ['Nobel Odds','research','0 = a finding nobody will remember · 100 = a finding that changes a field','0 = a question too small to matter · 100 = a question that reframes how we see learning'],
  ['The Perfect Study','research','0 = a design full of unfixable holes · 100 = a design you would defend for years','0 = data that answer nothing · 100 = evidence that genuinely shifts your beliefs'],
  ['Advisor Feedback','lab-life','0 = comments that create more confusion · 100 = feedback that unlocks the next move','0 = a meeting you dread · 100 = a conversation that sends you back energized'],
  ['Conference Talk','research','0 = everyone checks their email · 100 = people are still discussing it at dinner','0 = slides that hide the idea · 100 = a story that makes the evidence unforgettable'],
  ['Writing Day','research','0 = one sentence and seven snacks · 100 = a clear, flowing draft by sunset','0 = staring at the cursor · 100 = forgetting to check the clock'],
  ['Methods Match','research','0 = a method chosen because it is familiar · 100 = a method that fits the question exactly','0 = analysis as a black box · 100 = every decision is transparent and defensible'],
  ['Peer Review','research','0 = comments that miss the whole point · 100 = critique that makes the work much stronger','0 = a reviewer you cannot satisfy · 100 = a reviewer who becomes your sharpest collaborator'],
  ['Theoretical Spark','research','0 = a framework that merely labels things · 100 = an idea that makes puzzling patterns click','0 = theory detached from life · 100 = theory that changes what people notice'],
  ['Data Collection','research','0 = every plan falls apart before lunch · 100 = the fieldwork finally has a rhythm','0 = participants who cannot engage · 100 = conversations you keep thinking about afterward'],
  ['Lab Meeting','lab-life','0 = updates nobody hears · 100 = everyone leaves with a useful new perspective','0 = a room where only one voice matters · 100 = a room where unfinished ideas are safe'],
  ['Email From Your Advisor','lab-life','0 = “Can we talk?” with no context · 100 = “This is ready—send it.”','0 = a message that ruins your focus · 100 = a message you save for a hard day'],
  ['Imposter Syndrome','lab-life','0 = calm confidence in your place here · 100 = convinced everyone will find you out','0 = asking a question feels easy · 100 = even raising your hand feels impossible'],
  ['Deadline Gravity','lab-life','0 = a date on a distant calendar · 100 = time moves at twice its normal speed','0 = a deadline that focuses you · 100 = a deadline that makes every task urgent'],
  ['Collaboration Chemistry','lab-life','0 = every handoff adds friction · 100 = ideas improve every time they change hands','0 = parallel work with no connection · 100 = a team that can finish each other’s sentences'],
  ['The Literature Rabbit Hole','research','0 = one useful citation and out · 100 = it is 2 a.m. and you have opened 37 tabs','0 = reading confirms what you knew · 100 = every paper rearranges the question'],
  ['A Good Question','research','0 = answers itself before you begin · 100 = stays generative even after a strong answer','0 = interesting only to specialists · 100 = makes almost anyone lean in'],
  ['Replication Feeling','research','0 = dread that the pattern will vanish · 100 = quiet confidence that it will hold','0 = one surprising result · 100 = a result that survives every reasonable check'],
  ['Teaching Moment','teaching','0 = students are physically present only · 100 = the room starts teaching itself','0 = an explanation that adds fog · 100 = the exact example that makes it click'],
  ['Student Question','teaching','0 = one that derails the whole hour · 100 = one that opens the discussion beautifully','0 = a question with a lookup answer · 100 = a question you want to think about for days'],
  ['Feedback You Give','teaching','0 = so vague it cannot help · 100 = specific enough to change the next attempt','0 = criticism that closes a door · 100 = honesty that makes growth feel possible'],
  ['Academic Small Talk','lab-life','0 = weather, then silence · 100 = an unexpected conversation that leads somewhere real','0 = networking as performance · 100 = finding people who genuinely get your work'],
  ['Work–Life Boundary','lab-life','0 = the dissertation has claimed every evening · 100 = research has a sustainable place in your life','0 = resting feels like failure · 100 = rest makes tomorrow’s work better'],
  ['The Revision','research','0 = moving commas while avoiding the problem · 100 = a rewrite that reveals the real argument','0 = reviewer requests feel arbitrary · 100 = revisions make the paper undeniably clearer'],
  ['Statistical Intuition','research','0 = numbers feel like a foreign language · 100 = you can explain the pattern at a whiteboard','0 = a model chosen by habit · 100 = an analysis that mirrors the phenomenon'],
  ['Research Ethics','research','0 = checking a box at the start · 100 = care that shapes every decision','0 = protecting the project first · 100 = protecting participants even when it costs you'],
  ['A Failed Study','research','0 = six months with nothing to show · 100 = the “failure” teaches the most important thing','0 = a result you hide · 100 = a null finding that changes the next study'],
  ['Reading Group','lab-life','0 = a summary no one needed · 100 = a shared argument that changes how the lab thinks','0 = one person speaks all hour · 100 = the text becomes a collective conversation'],
  ['Career Clarity','lab-life','0 = every option feels like a foggy hallway · 100 = you know what kind of life you are building','0 = choosing a path to impress others · 100 = choosing a path that fits your values'],
  ['The Bold Idea','research','0 = so safe it cannot surprise anyone · 100 = risky enough to be worth discussing for years','0 = novelty for its own sake · 100 = ambition anchored in a real need'],
  ['Lab Belonging','lab-life','0 = feeling like a visitor in the room · 100 = knowing your perspective matters here','0 = support when everything is going well · 100 = support that shows up when work gets hard'],
  ['Open Science','research','0 = research locked behind closed doors · 100 = methods and materials built for others to learn from','0 = transparency as a slogan · 100 = transparency that changes how the work is done'],
  ['The Perfect Figure','research','0 = a chart that makes the result harder to see · 100 = a visual that makes the claim obvious','0 = decoration disguised as data · 100 = design in service of understanding'],
  ['Mentoring','lab-life','0 = advice that reproduces old anxieties · 100 = support that helps someone trust their own judgment','0 = telling someone what to do · 100 = helping them find their next question'],
  ['Qualifying Exams','lab-life','0 = a ritual of anxiety with no learning · 100 = a challenge that reveals how much you have grown','0 = studying to survive the test · 100 = synthesizing ideas you will use for years'],
  ['Field-Changing Paper','research','0 = incremental in every possible way · 100 = changes what researchers consider possible','0 = citation count without influence · 100 = an idea that reshapes future questions'],
  ['Researcher Superpower','research','0 = always knowing the answer · 100 = knowing exactly what to ask next','0 = working alone faster · 100 = making other people’s thinking sharper'],
  ['Future Self','lab-life','0 = exhausted and disconnected from your purpose · 100 = still curious, capable, and generous','0 = success defined by a title · 100 = success defined by a life you want to keep living'],
  ['The Group Chat','lab-life','0 = unanswered messages and unclear plans · 100 = a tiny infrastructure of mutual support','0 = notifications that interrupt everything · 100 = a place where help arrives quickly'],
  ['Education Impact','teaching','0 = an insight that never leaves the paper · 100 = research that improves how people learn and teach','0 = an intervention that works only once · 100 = a change that communities can adapt and own']
].map(([title,category,prompt1,prompt2],i)=>({id:`starter-${i+1}`,title,category,prompt1,prompt2,custom:false}));

let cards = [...starterCards, ...JSON.parse(localStorage.getItem('toi-custom-cards') || '[]')];
let selected = new Set(); let filter = 'all';
const deck = document.querySelector('#deck');
const categoryLabel = c => ({research:'Research', 'lab-life':'Lab life', teaching:'Teaching'})[c] || 'Custom';
const escapeHTML = s => s.replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
function render(){
  const visible = cards.filter(c=>filter==='all'||c.category===filter);
  deck.innerHTML = visible.map((c,i)=>`<article class="card ${c.category} ${c.custom?'custom':''} ${selected.has(c.id)?'selected':''}" tabindex="0" data-id="${c.id}" title="Click to select · Right-click to download">
    <div class="card-color"></div><div class="card-header"><span>${categoryLabel(c.category)}</span><span class="card-no">${String(i+1).padStart(2,'0')}</span></div><h3>${escapeHTML(c.title)}</h3>
    <div class="prompt"><span class="prompt-label">Prompt 01</span>${escapeHTML(c.prompt1)}</div><div class="prompt"><span class="prompt-label">Prompt 02</span>${escapeHTML(c.prompt2)}</div>
    <input class="card-selection" type="checkbox" aria-label="Select ${escapeHTML(c.title)}" ${selected.has(c.id)?'checked':''}/></article>`).join('');
  document.querySelector('#cardCount').textContent=cards.length; document.querySelector('#selectedCount').textContent=selected.size;
}
function toggle(id){ selected.has(id)?selected.delete(id):selected.add(id); render(); }
deck.addEventListener('click',e=>{const card=e.target.closest('.card');if(card)toggle(card.dataset.id)});
deck.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('.card')){e.preventDefault();toggle(e.target.dataset.id)}});
deck.addEventListener('contextmenu',e=>{const el=e.target.closest('.card');if(!el)return;e.preventDefault();downloadCard(cards.find(c=>c.id===el.dataset.id));});
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x===b));render()}));
document.querySelector('#selectAllBtn').addEventListener('click',()=>{const ids=cards.filter(c=>filter==='all'||c.category===filter).map(c=>c.id);const all=ids.every(id=>selected.has(id));ids.forEach(id=>all?selected.delete(id):selected.add(id));render();});
document.querySelector('#shuffleBtn').addEventListener('click',()=>{cards.sort(()=>Math.random()-.5);render()});
document.querySelector('#cardForm').addEventListener('submit',e=>{e.preventDefault();const card={id:`custom-${Date.now()}`,title:titleInput.value.trim(),category:categoryInput.value,prompt1:promptOne.value.trim(),prompt2:promptTwo.value.trim(),custom:true};cards.unshift(card);const saved=cards.filter(c=>c.custom);localStorage.setItem('toi-custom-cards',JSON.stringify(saved));e.target.reset();formMessage.textContent='Card added to the deck.';filter='all';document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x.dataset.filter==='all'));render();setTimeout(()=>formMessage.textContent='',2500)});
function wrap(ctx,text,maxWidth,lineHeight){const words=text.split(' ');let line='';let y=0;for(const word of words){const test=line?`${line} ${word}`:word;if(ctx.measureText(test).width>maxWidth&&line){ctx.fillText(line,80,y);y+=lineHeight;line=word}else line=test}if(line){ctx.fillText(line,80,y);y+=lineHeight}return y}
function downloadCard(c){const canvas=document.createElement('canvas');canvas.width=750;canvas.height=1050;const ctx=canvas.getContext('2d');ctx.fillStyle='#fffdf8';ctx.fillRect(0,0,750,1050);ctx.fillStyle=c.category==='research'?'#cbe8ec':c.category==='teaching'?'#e5cbe6':c.category==='lab-life'?'#f5ce5b':'#ef6f45';ctx.fillRect(0,0,750,33);ctx.fillStyle='#64707d';ctx.font='24px monospace';ctx.fillText(categoryLabel(c.category).toUpperCase(),80,104);ctx.fillStyle='#ef6f45';ctx.fillText('THREAD OF INQUIRY',430,104);ctx.fillStyle='#1e2735';ctx.font='700 63px Georgia';let titleY=165;titleY+=wrap(ctx,c.title,590,70);ctx.strokeStyle='#d8d1c5';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(80,titleY+25);ctx.lineTo(670,titleY+25);ctx.stroke();ctx.fillStyle='#ef6f45';ctx.font='22px monospace';ctx.fillText('PROMPT 01',80,titleY+72);ctx.fillStyle='#1e2735';ctx.font='29px Arial';let y=titleY+113;y+=wrap(ctx,c.prompt1,590,39);ctx.strokeStyle='#d8d1c5';ctx.beginPath();ctx.moveTo(80,y+35);ctx.lineTo(670,y+35);ctx.stroke();ctx.fillStyle='#ef6f45';ctx.font='22px monospace';ctx.fillText('PROMPT 02',80,y+83);ctx.fillStyle='#1e2735';ctx.font='29px Arial';wrap(ctx,c.prompt2,590,39);const a=document.createElement('a');a.download=`thread-of-inquiry-${c.title.toLowerCase().replace(/[^a-z0-9]+/g,'-')}.png`;a.href=canvas.toDataURL('image/png');a.click();}
document.querySelector('#downloadSelectedBtn').addEventListener('click',()=>{const picks=cards.filter(c=>selected.has(c.id));if(!picks.length){formMessage.textContent='Select one or more cards first.';document.querySelector('#creator').scrollIntoView({behavior:'smooth'});return}picks.forEach((c,i)=>setTimeout(()=>downloadCard(c),i*220));});
render();
