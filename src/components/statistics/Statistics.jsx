import './stat.css'

export const Statistics = (props) => {
  return <div>
    <section class="statistics">
      <h2 class="title">{props.title}</h2>

      <ul class="stat-list">
        {props.Roma.map((e) => <li class="item">
          <span class="label">{e.label}</span>
          <span class="percentage">{e.percentage}%</span>
        </li>)}
      </ul>
    </section>
  </div>
}