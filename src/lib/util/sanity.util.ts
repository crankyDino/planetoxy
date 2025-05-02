export async function getMedia(refId: string) {
    const res = await fetch(`/api/sanity/media?ref=${refId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    return await res.json();
}
