/**
 * Envoi des formulaires, en deux modes.
 *
 * L'application complète poste vers ses routes API, qui écrivent en base et
 * déclenchent les notifications. La version publiée sur GitHub Pages est un
 * export statique : il n'y a ni serveur ni base, donc les formulaires
 * n'envoient rien. Ils restent parcourables de bout en bout, et un bandeau le
 * dit à l'écran — un formulaire qui échoue en silence serait pire qu'inutile.
 */
export const STATIC_DEMO = process.env.NEXT_PUBLIC_STATIC_DEMO === '1'

export const CONTACT_EMAIL = 'arthur270.parois@gmail.com'

export async function postForm(
  endpoint: string,
  payload: unknown,
): Promise<{ ok: boolean; data: any }> {
  if (STATIC_DEMO) {
    await new Promise((r) => setTimeout(r, 420))
    return { ok: true, data: { success: true, demo: true, id: 'demo' } }
  }
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload ?? {}),
  })
  const data = await res.json().catch(() => ({}))
  return { ok: res.ok, data }
}
