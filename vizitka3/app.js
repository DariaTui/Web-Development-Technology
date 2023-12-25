(function(){
    window.drawCard = function(form){
        let resultDiv = form.closest('.card-container').querySelector('.card-result > .card');
        resultDiv.querySelector('.card-organization').textContent = form.organization.value;
        resultDiv.querySelector('.card-fio').textContent = form.fio.value;
        resultDiv.querySelector('.card-position').textContent = form.position.value;
        resultDiv.querySelector('.card-phone').textContent = form.phone.value;
        resultDiv.querySelector('.card-email').textContent = form.email.value;
        resultDiv.querySelector('.card-address').textContent = form.address.value;
    
        let radbtnL=document.getElementById('left');
        let radbtnR=document.getElementById('right');       
        if (radbtnL.checked) {
		    resultDiv.querySelector('.card-fio').style.textAlign='left';
	    }
        else if(radbtnR.checked){
            resultDiv.querySelector('.card-fio').style.textAlign='right';
        }
        else{
            resultDiv.querySelector('.card-fio').style.textAlign='center';
        } 

        let radbtnLP=document.getElementById('leftP');
        let radbtnRP=document.getElementById('rightP');       
        if (radbtnLP.checked) {
		    resultDiv.querySelector('.card-position').style.textAlign='left';
	    }
        else if(radbtnRP.checked){
            resultDiv.querySelector('.card-position').style.textAlign='right';
        }
        else{
            resultDiv.querySelector('.card-position').style.textAlign='center';
        } 

        let radbtnSN24=document.getElementById('24N');
        let radbtnSN28=document.getElementById('28N');       
        if (radbtnSN24.checked) {
		    resultDiv.querySelector('.card-fio').style.fontSize='24px';
	    }
        else if(radbtnSN28.checked){
            resultDiv.querySelector('.card-fio').style.fontSize='28px';
        }
        else{
            resultDiv.querySelector('.card-fio').style.fontSize='26px';
        } 

        let radbtnSP14=document.getElementById('14P');
        let radbtnSP18=document.getElementById('18P');       
        if (radbtnSP14.checked) {
		    resultDiv.querySelector('.card-position').style.fontSize='14px';
	    }
        else if(radbtnSP18.checked){
            resultDiv.querySelector('.card-position').style.fontSize='18px';
        }
        else{
            resultDiv.querySelector('.card-position').style.fontSize='16px';
        } 

        //hide text
        if (document.getElementById('hider').checked===true){
            resultDiv.querySelector('.card-email').textContent = form.email.value;

        }
        else{
            resultDiv.querySelector('.card-email').textContent='';
        }

        if (document.getElementById('hiderAddress').checked===true){
            resultDiv.querySelector('.card-address').textContent = form.address.value;

        }
        else{
            resultDiv.querySelector('.card-address').textContent='';
        }
       
            //color FIO text
            let radbtnCNP=document.getElementById('pink');
            let radbtnCNBL=document.getElementById('blue');   
            let radbtnCNY=document.getElementById('yellow');    
            if (radbtnCNBL.checked) {
                resultDiv.querySelector('.card-fio').style.color='blue';
            }
            else if(radbtnCNP.checked){
                resultDiv.querySelector('.card-fio').style.color='rgb(255,0,127)';
            }
            else if(radbtnCNY.checked){
                resultDiv.querySelector('.card-fio').style.color='rgb(204,102,0)';
            }
            else{
                resultDiv.querySelector('.card-fio').style.color='black';
            }

            //color POSITION text
            let radbtnCNDG=document.getElementById('darkgrey');
            let radbtnCNG=document.getElementById('grey');   
            let radbtnCLG=document.getElementById('lightgrey');    
            if (radbtnCNDG.checked) {
                resultDiv.querySelector('.card-position').style.color='rgb(64,64,64)';
            }
            else if(radbtnCNG.checked){
                resultDiv.querySelector('.card-position').style.color='rgb(96,96,96)';
            }
            else if(radbtnCLG.checked){
                resultDiv.querySelector('.card-position').style.color='rgb(160,160,160)';
            }
            else{
                resultDiv.querySelector('.card-position').style.color='black';
            }
    }

    
})();

    


