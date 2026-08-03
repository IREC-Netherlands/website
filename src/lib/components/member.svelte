<script>
	let {
		image = '',
		name = 'Fullname',
		job = 'Job descriptions',
		research = 'Research topic',
		education = 'Degree details',
		contact = 'Contact Information'
	} = $props();
</script>

<div class="card">
	<img src={image ? image : '/assets/logo/UBIG-logo only.png'} alt={name} />
	<div class="card-content">
		<h2 class="card-title">{name}</h2>
		<p class="card-description">{job}</p>

		<div class="card-field">
			<span class="label">Research Topic</span>
			<span class="description">{research}</span>
		</div>

		<div class="card-field">
			<span class="label">Education</span>
			<span class="description">{education}</span>
		</div>

		<div class="card-field">
			<span class="label">Contact</span>
			<span class="description">{contact}</span>
		</div>
	</div>
</div>

<style>
	.card {
		display: flex;
		border: 1px solid #ddd;
		overflow: hidden;
		width: 100%;
		background-color: white;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		align-items: center;

		@media (width < 768px) {
			flex-direction: column;
		}
	}

	.card img {
		width: 200px;
		height: 100%;
		object-fit: cover;
	}

	.card-content {
		padding: 20px;
		flex: 1;
	}

	.card-title {
		font-size: 1.75rem;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.card-description {
		font-size: 1rem;
		color: #555;
		margin-bottom: 20px;
	}

	.card-field {
		display: flex;
		margin-bottom: 10px;

		@media (width < 768px) {
			flex-direction: column;
		}

		.label {
			min-width: 8rem;
			font-weight: bold;
			display: block;
		}

		.description {
			color: #777;
		}
	}
</style>
