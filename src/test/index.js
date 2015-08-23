export class Test {
	context = {};
	activate(params) {
		this.context.name = params.name
		this.heading = params.name
	};
}
