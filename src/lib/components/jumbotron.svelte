<script>
	let title = 'Welcome to Our Website';
	let description =
		'UBIG focus on Geo-Urban and Biogeotechnics Innovations specializing in deep excavations, soil improvements, and smart sensing';
	let buttonText = 'Our Team';
	let buttonLink = '/members';
</script>

<div class="jumbotron surface-1">
	<h1>{title}</h1>
	<p>{description}</p>
	<a href={buttonLink}>
		<button>{buttonText}</button>
	</a>
</div>

<style>
	.jumbotron {
		width: 100%;
		justify-self: center;
		padding: 50px 20px;
		text-align: center;
		border-radius: 10px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.jumbotron h1 {
		font-size: 3rem;
		margin: 0;
	}

	.jumbotron p {
		font-size: 1.25rem;
		margin-top: 10px;
	}

	.jumbotron button {
		margin-top: 20px;
		padding: 10px 20px;
		font-size: 1rem;
		background-color: white;
		color: #007bff;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: background-color 0.3s;
	}

	.jumbotron button:hover {
		background-color: #f1f1f1;
	}
</style>
