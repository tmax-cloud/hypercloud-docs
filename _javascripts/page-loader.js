function versionSelector(list, distro, currentVersion) {
	// the version we want
	newVersion = list[list.selectedIndex].value;
	// the new final link to load
	newLink = '';

	// the fileRequested
	var fileRequested = '';

	// spilt the current path
	var pathArray = window.location.pathname.split(`/${distro}/${currentVersion}-`);

	var language = pathArray[1].split('/')[0];

	fileRequested = 'welcome/intro.html';

	newLink = `${window.origin}${pathArray[0]}/${distro}/${newVersion}-${language}/${fileRequested}`;
	//
	window.location = newLink;
}

function selectVersion(currentVersion) {
	var el = document.getElementById('version-selector');
	el.value = currentVersion;
}

function languageSelector(list, distro, currentVersion) {
	// the version we want
	selectedLanguage = list.getAttribute('value');

	// the new final link to load
	newLink = '';

	// the fileRequested
	var fileRequested = '';

	// spilt the current path
	// var pathArray = window.location.pathname.split(`/${distro_key}/`);
	var pathArray = window.location.pathname.split(`/${distro}/${currentVersion}-`);
	fileRequested = pathArray[1].slice(3);
	newLink = `${window.origin}${pathArray[0]}/${distro}/${currentVersion}-${selectedLanguage}/${fileRequested}`;
	window.location = newLink;
}

function selectLanguage(distro, currentVersion) {
	var el = document.getElementById('language-selector');
	var pathArray = window.location.pathname.split(`/${distro}/${currentVersion}-`);
	var language = pathArray[1].split('/')[0];

	var options = [...document.getElementById('language-options').children];
	options.forEach((item) => {
		if (item.getAttribute('value') === language) {
			el.innerText = item.text;
		}
	});
}

function goFirstPage(distro, currentVersion) {
	var pathArray = window.location.pathname.split(`/${distro}/${currentVersion}-`);
	var language = pathArray[1].split('/')[0];
	fileRequested = 'welcome/intro.html';
	newLink = `${window.origin}${pathArray[0]}/${distro}/${currentVersion}-${language}/${fileRequested}`;
	window.location = newLink;
}

var getCurrentLanguage = () => {
	console.log('getCurrentLanguage..');
	var ls = document.getElementById('language-selector');
	var options = [...document.getElementById('language-options').children];
	let res = '';
	options.forEach((item) => {
		if (item.innerText === ls.innerText) {
			res = item.getAttribute('value');
		}
	});
	return res;
};
