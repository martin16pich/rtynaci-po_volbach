(() => {
  'use strict';
  const entries = Array.isArray(window.RTYNACI_ARTICLES) ? window.RTYNACI_ARTICLES : [];
  const articles = entries.filter(a => a && a.published !== false && a.date && a.title)
    .sort((a,b) => b.date.localeCompare(a.date) || (b.createdAt || '').localeCompare(a.createdAt || ''));
  const home = document.getElementById('home-news');
  const archive = document.getElementById('archive-news');
  const modal = document.getElementById('article-modal');
  const panel = modal?.querySelector('.article-modal-panel');
  const content = document.getElementById('article-modal-content');
  let lastFocus = null;
  const make = (tag, cls, text) => {
    const el=document.createElement(tag);
    if(cls) el.className=cls;
    if(text !== undefined) el.textContent=text;
    return el;
  };
  const dateLabel = date => {
    const d = new Date(date + 'T12:00:00');
    return Number.isNaN(d.valueOf()) ? date : new Intl.DateTimeFormat('cs-CZ',{day:'numeric',month:'long',year:'numeric'}).format(d);
  };
  function showArticle(a) {
    if(!modal || !content) return;
    lastFocus = document.activeElement;
    content.replaceChildren();
    const date=make('time','',dateLabel(a.date)); date.dateTime=a.date; content.append(date);
    const title=make('h2','',a.title); title.id='article-modal-title'; content.append(title);
    if(a.image){const image=make('img');image.src=a.image;image.alt=a.imageAlt || a.title;content.append(image);}
    if(a.lead) content.append(make('p','article-modal-lead',a.lead));
    content.append(make('div','article-modal-body',a.body || ''));
    modal.hidden=false;document.body.classList.add('modal-open');panel?.focus();
  }
  function closeArticle(){if(!modal || modal.hidden)return; modal.hidden=true;document.body.classList.remove('modal-open');lastFocus?.focus?.();}
  modal?.querySelectorAll('[data-close-article]').forEach(x=>x.addEventListener('click',closeArticle));
  document.addEventListener('keydown',event=>{
    if(modal && !modal.hidden && event.key==='Escape')closeArticle();
    if(modal && !modal.hidden && event.key==='Tab'){
      const focusable=[...panel.querySelectorAll('button,a[href],input,select,textarea,[tabindex]:not([tabindex="-1"])')].filter(el=>!el.disabled);
      if(!focusable.length){event.preventDefault();panel.focus();return;}
      const first=focusable[0],last=focusable[focusable.length-1];
      if(event.shiftKey && document.activeElement===first){event.preventDefault();last.focus();}
      else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first.focus();}
    }
  });
  function render(list, target) {
    if(!target)return;
    target.replaceChildren();
    if(!list.length){target.append(make('p','news-empty','Zatím zde nejsou zveřejněné žádné aktuality.'));return;}
    list.forEach(a=>{
      const article=make('article','news-item');
      if(a.image){const img=make('img','news-photo');img.src=a.image;img.alt=a.imageAlt || a.title;img.loading='lazy';article.append(img);}
      else {article.append(make('div','news-photo'));}
      const text=make('div','news-content');
      const date=make('time','',dateLabel(a.date));date.dateTime=a.date;text.append(date);
      text.append(make('h3','',a.title));text.append(make('p','news-teaser',a.lead || ''));
      const button=make('button','news-open','Více informací →');button.type='button';button.addEventListener('click',()=>showArticle(a));text.append(button);
      article.append(text);target.append(article);
    });
  }
  render(articles.slice(0,3),home);
  render(articles,archive);
})();
