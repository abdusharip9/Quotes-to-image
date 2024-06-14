document
	.querySelector('.settings-section__save-btn')
	.addEventListener('click', function () {
		html2canvas(document.getElementById('capture')).then(function (canvas) {
			// Rasmni sahifada ko'rsatish yoki yuklab olish uchun
			// document.body.appendChild(canvas)
			// Yuklab olish uchun
			var link = document.createElement('a')
			link.download = `Img-Quotes${Date.now()}.jpg`
			link.href = canvas.toDataURL()
			link.click()
		})
	})
