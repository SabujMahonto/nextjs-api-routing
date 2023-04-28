

export default function PlayerItem({player}) {
    console.log(player);
  return (
    <div>
        <h3>{player.id}-{player.name},</h3>
    </div>
  )
}
