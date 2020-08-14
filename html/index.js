var visable = false;

$(function () {
	window.addEventListener('message', function (event) {
		switch (event.data.action) {
			
			case 'toggle':
				if (visable) {
					$('.container').fadeOut();
				} else {
					$('.container').fadeIn();
				}
				visable = !visable;
				break;

			case 'close':
				$('.container').fadeOut();
				visable = false;
				break;

			case 'updatePlayerJobs':
				var jobs = event.data.jobs;

				$('#player_count').html(jobs.player_count);

				$('#ems').html(jobs.ems);
				$('#police').html(jobs.police);
				$('#mechanic').html(jobs.mechanic);
				$('#cardealer').html(jobs.cardealer);
				break;	
			default:
				console.log('ASCore | Ongeldige actie');
				break;
		}
	}, false);
});
