import React, { useState, useEffect } from 'react';
import {
  Gallery,
  GalleryItem,
  Page,
  PageSection,
  Title,
} from '@patternfly/react-core';
import { useHistory, useParams } from 'react-router-dom';
import GearItem from './GearItem';
import IconWater from './icons/icon-water';
import { fetchGearForCategory } from '../api/gear';
import './CategoryDetail.scss';

const CategoryDetail = () => {
  // const gear = [
  //   {
  //     id: 8,
  //     name: 'sandals',
  //     weight: 0.8,
  //     imageUrl: null,
  //     categoryId: 21,
  //   },
  //   {
  //     id: 9,
  //     name: 'socks',
  //     weight: 0.1,
  //     imageUrl: null,
  //     categoryId: 21,
  //   },
  // ];

  const [gear, setGear] = useState([]);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchGearForCategory(id).then((data) => setGear(data));
    } else {
      setGear([]);
    }
  }, [history.location]);

  return (
    <Page>
      <PageSection className="app-c-page-section">
        <Title headingLevel="h2" size="xl" className="app-c-title pf-u-pb-md">
          <IconWater />
          Category name
        </Title>
        <Gallery hasGutter>
          { gear.map((item) => (
            <GalleryItem key={item.id}>
              <GearItem item={item} />
            </GalleryItem>
          ))}
        </Gallery>
      </PageSection>
    </Page>
  );
};
export default CategoryDetail;
