import { faker } from '@faker-js/faker';

interface IProducts {
	avatar: string;
	name: string;
	job: string;
	adjective: string;
}

class ProductsController {
	randomCars(): IProducts[] {
		const product: IProducts[] = [];
		const random = Math.floor(Math.random() * 10);
		for (let i = 0; i < random; i++) {
			product.push({
				avatar: faker.image.avatar(),
				name: faker.name.lastName(),
				job: faker.name.jobArea(),
				adjective: faker.word.adjective(),
			});
		}
		return product;
	}
}

export default new ProductsController();
