export function createAudio() {
	document.addEventListener("DOMContentLoaded", function () {
		const audio = document.getElementById("audio");
		const progressContainer = document.getElementById(
			"progress-time-container"
		);
		const progress = document.getElementById("progress-time");
		const currentTimeElement = document.getElementById("current-time");
		const durationElement = document.getElementById("duration");
		const playPauseBtn = document.querySelector(
			'[data-audio="play-pause"]'
		);
		const iconPlayingAudio = document.querySelector(
			'[data-audio="iconPlayingAudio"]'
		);

		let isPlaying = false;

		playPauseBtn.addEventListener("click", function (event) {
			event.preventDefault;
			if (isPlaying) {
				audio.pause();
				playPauseBtn.classList.remove("pause");
				playPauseBtn.classList.add("play");
			} else {
				audio.play();
				playPauseBtn.classList.remove("play");
				playPauseBtn.classList.add("pause");
			}
		});

		audio.addEventListener("play", function () {
			isPlaying = true;
		});

		audio.addEventListener("pause", function () {
			isPlaying = false;
		});

		audio.addEventListener("timeupdate", function () {
			const { currentTime, duration } = audio;
			const progressPercent = (currentTime * 100) / duration;
			progress.style.width = `${progressPercent}%`;

			// Atualizar o tempo atual e a duração
			currentTimeElement.textContent = formatTime(currentTime);
			durationElement.textContent = formatTime(duration);
		});

		progressContainer.addEventListener("click", function (e) {
			const width = this.clientWidth; //pega a largural total do elemento.
			const clickX = e.offsetX; //offsetX pega o pixel do elemento referente a area do próprio elemento.
			const duration = audio.duration; // referencia o objeto audio, duration é a propriedade que pega o tempo total do audio referenciado.

			audio.currentTime = (clickX / width) * duration; //
		});

		function formatTime(time) {
			const minutes = Math.floor(time / 60);
			const seconds = Math.floor(time % 60);
			return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
		}
	});
}
