let idade = 27; 
let s_con = 100;
if(idade < 10) { 
s_con = s_con + 80
console.log("O pagamento ficará em R$",s_con + ",00"); 
} else if(idade >= 10 && idade <= 30) { 
s_con = s_con + 50 
console.log("O pagamento ficará em R$",s_con + ",00");
} else if(idade > 30 && idade <= 60) { 
s_con = s_con + 95
console.log("O pagamento ficará em R$",s_con + ",00"); 
} else { 
s_con = s_con + 130 
console.log("O pagamento ficará em R$",s_con + ",00"); 
}; 