

export default function PlayerItem({player}) {
  return (
    <div className="container mx-auto text-center">
        <h3 className="text-3xl">{player.id}-{player.name},</h3>
        <hr />
    </div>
  )
}
