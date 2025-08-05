// import NearByZipcode from './seoSections/NearByZipcode';
import PapularSearches from './seoSections/PapularSearches';
import TopCities from './seoSections/TopCities';
import TopStates from './seoSections/TopStates';

 interface SeoProps {
  topCities: any[];
  topStates: any[];
  topSearches?: any[];
}

const NewSeoSection = ({
  topCities,
  topStates,
  topSearches,
}: SeoProps) => {
  // const isCityDetailPage =
  //   pathname === '/states' || pathname.startsWith('/Statedetail/') || pathname.startsWith('/citydetail');
// const isStateDetailPage = pathname.startsWith('/daycaredetail/') || pathname.includes(abr);

  return (
    <div style={{ background: '#fff', padding: '16px', display: 'flex', justifyContent: 'center' }}>
      <div style={{  width: '100%' }}>
        <div
          style={{
            marginTop: '2.5rem',
            marginBottom: '2.5rem',
            background: 'rgba(192, 191, 191, 0.44)',
            borderRadius: '20px',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          <div style={{display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row'}}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '1.5rem',
                maxWidth: '60%'
              }}
            >
                <div className="top-states-container">
  <TopStates topState={topStates} />
</div>
                <div style={{ flex: '1 1 300px' }}>
                  {/* Replace with actual HTML for TopCities */}
                  <TopCities topcities={topCities} />
                </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
            {/* Replace with actual HTML for PapularSearches */}
            <PapularSearches topsearches={topSearches} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSeoSection;