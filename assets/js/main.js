/*=============== SHOW SIDEBAR ===============*/


/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */


/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */


/*=============== SKILLS TABS ===============*/

const tabs = document.querySelectorAll('[data-target]'),
	  tabContent = document.querySelectorAll('[data-content');

	  tabs.forEach(tab => {
	  	tab.addEventListener("click", () => {
	  		const target = document.querySelector(tab.dataset.target);

	  		tabContent.forEach(tabContents => {
	  			tabContents.classList.remove('skills_active');
	  		})

	  		target.classList.add('skills_active');

	  		tabs.forEach(tab => {
	  			tab.classList.remove('skills_active');
	  		})

	  		tab.classList.add('skills_active');
	  	})
	  })


/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixerPortfolio = mixitup('.work_container', {
	selectors: {
		target: '.work_card'
	},
	animation: {
		duration: 300
	}
})
/*===== Link Active Work =====*/

const linkWork = document.querySelectorAll('.work_item');

function activeWork(){
	linkWork.forEach(l=>l.classList.remove('active_work'));
	this.classList.add('active_work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork));

/*===== Work Popup =====*/

document.addEventListener('click', (e) => {
	if (e.target.classList.contains("work_button")) {
		togglePortfolioPopup();
		portfolioItemDetails(e.target.parentElement);
	}
})

function togglePortfolioPopup(){
	document.querySelector(".portfolio_popup").classList.toggle("open");
}


document.querySelector(".portfolio_popup_close").addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem){
	document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work_img").src;
	document.querySelector(".portfolio_popup_subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
	document.querySelector(".portfolio_popup_body").innerHTML = portfolioItem.querySelector(".portfolio_item_details").innerHTML;
}


/*=============== SERVICES MODAL ===============*/

const modalViews = document.querySelectorAll('.services_modal'),
	  modalBtns = document.querySelectorAll('.services_button'),
	  modalCloses = document.querySelectorAll('.services_modal_close')

let modal = function(modalClick){
	modalViews[modalClick].classList.add('active_modal');
}

modalBtns.forEach((modalBtn, i) => {
	modalBtn.addEventListener('click', () => {
		modal(i)
	})
})

modalCloses.forEach((modalClose) => {
	modalClose.addEventListener("click", () => {
		modalViews.forEach((modalView) => {
			modalView.classList.remove('active_modal')
		})
	})
})


/*=============== INPUT ANIMATION ===============*/

const inputs = document.querySelectorAll('.input');

function focusFunc(){
	let parent = this.parentNode;
	parent.classList.add("focus");
}

function blurFunc(){
	let parent = this.parentNode;
	if (this.value == "") {
		parent.classList.remove("focus")
	}
}

inputs.forEach((input) => {
	input.addEventListener("focus", focusFunc);
	input.addEventListener("blur", blurFunc);
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/
