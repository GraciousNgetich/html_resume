
	fetch('https://92pa1yuyzc.execute-api.us-east-1.amazonaws.com/Prod/get')
		.then(response => response.json())
		.then((data) => {
			document.getElementById('replaceme').innerText = data.count
		})