const NavigationSection = ({ title, items }) => (
    <div>
      <h3 className="text-sm font-semibold leading-6 text-wri-yellow">{title}</h3>
      <ul role="list" className="mt-6 space-y-4">
        {items.map(item => (
          <li key={item.name}>
            <a
              href={item.href}
              target={item.target}
              className="text-sm leading-6 text-gray-300 hover:text-wri-yellow"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default NavigationSection;