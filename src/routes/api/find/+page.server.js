import { error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const unsplash_image = data.get('unsplash_image');

		if (unsplash_image) {
			const file_name = unsplash_image.toString().split('-');
			const verification_bit = file_name[file_name.length - 1];

			if (!verification_bit.includes('unsplash')) {
				error(400, {
					message: 'Invalid Unsplash Image. Filename of the file doesn\'t match the file name convention unsplash images use.',
					code: 'VERIFICATION_BIT_FAILED'
				});
			}
			const id = file_name[file_name.length - 2];
			redirect(302, `https://unsplash.com/photos/${id}`);
		} else {
			error(400, 'No Image Submitted.');
		}
	}
};