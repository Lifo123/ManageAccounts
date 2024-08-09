const c=()=>JSON.parse(localStorage.getItem("Accounts")||'[{"Platform":"Platform","Usage":0,"Accounts":[]}]'),s=t=>(localStorage.setItem("Accounts",JSON.stringify(t)),t);export{c as g,s};
