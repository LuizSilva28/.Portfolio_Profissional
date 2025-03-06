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
		const bntVolume = document.querySelector("#bnt-volume");
		const barVolumeContainer = document.querySelector(
			"#bar-volume-container"
		);
		const barVolumeContent = document.querySelector("#bar-volume-content");
		const bntPlaySpeedAudio = document.querySelector(
			'[data-audio="speed-audio"]'
		);
		const contentBntAudio = document.querySelector(
			'[data-audio="contentBntAudio"]'
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

		});
		progressContainer.addEventListener("click", function (e) {
			const width = this.clientWidth; 
			const clickX = e.offsetX;
			const duration = audio.duration;

			audio.currentTime = (clickX / width) * duration; //
		});

		let audioVolumeSaved = 1;
		let barVolumeContenSaved = "";
		let audioVolumeAtualizado = 1;

		bntPlaySpeedAudio.addEventListener("click", function () {
			let speedAudio = audio.playbackRate;
			audio.playbackRate = speedAudio === 1 ? 1.5 : 1;

			speedAudio === 1
				? (contentBntAudio.textContent = "1.5x")
				: (contentBntAudio.textContent = "1x");

			console.log(speedAudio);
		});

		function setAudioMuted(volumeAtual) {
			audio.volume = volumeAtual === 0 ? audioVolumeAtualizado : 0;
			audioVolumeSaved = audio.volume;

			audio.volume === 0
				? (barVolumeContent.style.width = "0px")
				: (barVolumeContent.style.width = barVolumeContenSaved);
		}

		bntVolume.addEventListener("click", function () {
			const volume = audio.volume;
			let volumeAtual = volume * audioVolumeSaved;
			setAudioMuted(volumeAtual);
			bntVolume.classList.toggle("volumeMuted");
		});
		barVolumeContainer.addEventListener("click", function (e) {
			const width = this.clientWidth; 
			const clickX = e.offsetX; 
			audio.volume = clickX / width; 
			audioVolumeAtualizado= audio.volume;
			
			barVolumeContent.style.width = `${clickX}px`;
			barVolumeContenSaved = `${clickX}px`;

			if (audio.volume < 0.1) {
				bntVolume.classList.add("volumeMuted");
			} else {
				bntVolume.classList.remove("volumeMuted");
			}
		});
	});
}
