import Logo from "../images/location.png"

export default function Main(props) {
  return (
    <section className="content">
      <div className="image-container">
        <img className="place-image" src={props.item.imageUrl} />
      </div>
      <div className="description-container">
        <p>
          <span><img className="location-logo" src={Logo} /></span>
          <span className="location">{props.item.location}</span>
          <span><a className="google-maps-link" href={props.item.googleMapsUrl}>View On Google Maps</a></span>
        </p>
        <h1>{props.item.title}</h1>
        <p className="start-end-date">{props.item.startDate} - {props.item.endDate}</p>
        <p className="description">{props.item.description}</p>
      </div>
    </section>
  )
}