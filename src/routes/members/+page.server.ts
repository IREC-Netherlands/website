import type { Member } from '$lib/types'

export async function load({ fetch }) {
	const response = await fetch('api/members')
	const members: Member[] = await response.json()
	return { members }
}
