export function load() {
	const modules = import.meta.glob('/src/content/works/*.json', {
		eager: true,
		import: 'default'
	});

	const works = Object.values(modules).sort((a, b) => a.order - b.order);

	return { works };
}
