const banner = document.createElement('div');
banner.style.position = 'fixed';
banner.style.top = '0';
banner.style.left = '0';
banner.style.width = '100%';
banner.style.backgroundColor = '#181a21';
banner.style.zIndex = '9999999999999999';
banner.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
banner.style.display = 'flex';
banner.style.justifyContent = 'center';
banner.style.alignItems = 'center';
banner.style.padding = '10px 0';
document.body.style.marginTop = '60px';

const icon = document.createElement('i');
icon.className = 'fas fa-search';
icon.style.marginRight = '10px';
icon.style.color = '#fff';

const text = document.createElement('span');
text.innerText = 'Search on Phind';
text.style.color = '#fff';
text.style.fontSize = '16px';

const button = document.createElement('button');
button.appendChild(icon);
button.appendChild(text);
button.style.padding = '10px 20px';
button.style.fontSize = '16px';
button.style.color = '#fff';
button.style.backgroundColor = '#000000';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';
button.style.transition = 'background-color 0.2s ease-in-out';

button.addEventListener('mouseover', () => {
	button.style.backgroundColor = '#282828';
});

button.addEventListener('mouseout', () => {
	button.style.backgroundColor = '#181818';
});

banner.appendChild(button);
document.body.insertBefore(banner, document.body.firstChild);

button.addEventListener('click', () => {
	const url = window.location.href;
	window.location.href = url.replace('github.com', 'github.fauzaanu.com');
});

