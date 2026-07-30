import { json } from '@sveltejs/kit'
import type { Member } from '$lib/types'

async function getMembers() {
	let members: Member[] = []

	const paths = import.meta.glob('../../../data/markdown/members/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Member, 'slug'>
			const member = { ...metadata, slug } satisfies Member
			members.push(member)
		}
	}

	return members
}

export async function GET() {
	const members = await getMembers()
	return json(members)
}
