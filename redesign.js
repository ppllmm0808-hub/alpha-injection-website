(()=>{
const scene=document.querySelector('.mold-visual');
if(scene){const button=scene.querySelector('button');button.addEventListener('click',()=>{const closed=scene.classList.toggle('closed');button.setAttribute('aria-pressed',String(closed));button.textContent=closed?'금형 펼쳐보기':'금형 결합하기';});}
document.querySelectorAll('.prod-cell').forEach(card=>{const link=document.createElement('a');link.className='prod-cta';link.href='#contact';link.textContent='제품 상담하기';link.addEventListener('click',()=>{document.querySelector('#cForm select').value='쇼핑몰 제품 구매';});card.append(link)});
// The original form has no submission endpoint: prevent false receipt confirmation.
const form=document.querySelector('#cForm');if(form){form.addEventListener('submit',e=>{e.preventDefault();e.stopImmediatePropagation();const notice=document.querySelector('#formOk');notice.style.display='block';notice.textContent='현재 온라인 접수 준비 중입니다. 010-8442-7500으로 연락해 주시면 안내해 드립니다.';notice.setAttribute('role','status');},true);}
})();
