function handler(m) {
  
  const kontak = {
	"displayName": 'My Owner Umar',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${conn.getName('923023943131@s.whatsapp.net')}\nitem1.TEL;waid=923023943131:923023943131\nitem1.X-ABLabel:save-me.\nURL;My Web: https://github.com/KING DEVIL01\nEMAIL;Email Owner:DevilSameer345@gamil.com\nORG: NOT A BOT +SAVE ME\nTEL;My number ;waid=48888781888:48888781888\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
