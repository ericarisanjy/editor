<div class="create-page-container create-page-item container-create-input is_hidden">
    <div class="create-page">
      <div class="item">
        <input type="text" name="pageName" placeholder="Nom de la Page" class="input pageName">
      </div>
      <div class="item">
        <input type="text" name="pagedescription" placeholder="Description" class="input pagedescription">
      </div>
      <div class="item">
        <input type="text" name="pageUrl" placeholder="URL de la page" class="input pageUrl grised" readOnly>
      </div>
      <div class="item">
        <div class="content-dropdown-css">
          <input type="text" readOnly placeholder="Séléctionnez des fichiers" class="input input-drop"/>
          <div class="drop-container is_hidden">
            <?php
            if($cssResult){
              foreach($cssResult->fetchAll() as $cssUnit){
            ?>
              <div class="item-content">
                <div class="check-item">
                  <input type="checkbox" class="input-check-page" value="<?php echo $cssUnit["id"] ?>" data-content="<?php echo $cssUnit["content"] ?>"/>
                </div>
                <span class="check-text" data-id="<?php echo $cssUnit["id"] ?>"><?php echo $cssUnit["name"] ?></span>
              </div>
            <?php
              }
            }
            ?>
          </div>
        </div>
      </div>
    </div>
</div>
<div class="container create-page-item container-create is_hidden">
    <div class="container-editor">
      <div class="bloc-container not_on_modal">
        <p class="txt-select">Ajouter une section: </p>
        <div class="defaultSection" data-section="sectionOne">
          <div class="oneSection">  
          </div>
        </div>
        <div class="defaultSection" data-section="sectionTwo">
          <div class="oneSection">
            <div class="col-50 flex">
              
            </div>
            <div class="col-50 flex border-left">
              
            </div>
          </div>
        </div>
        <div class="defaultSection" data-section="sectionThree">
          <div class="oneSection">
            <div class="col-65 flex">
              
            </div>
            <div class="col-35 flex border-left">
              
            </div>
          </div>
        </div>
        <div class="defaultSection" data-section="sectionFour">
          <div class="oneSection">
            <div class="col-35 flex">
              
            </div>
            <div class="col-65 flex border-left">
              
            </div>
          </div>
        </div>
        <div class="defaultSection" data-section="sectionFive">
          <div class="oneSection">
            <div class="col-33 flex">
              
            </div>
            <div class="col-33 flex border-left">
              
            </div>
            <div class="col-33 flex border-left">
              
            </div>
          </div>
        </div>
        <div class="content_nbre_col is_hidden">
          <input type="number" name="" class="nbre_col position-relative nbre_not_on" value="3" placeholder="Nombre de colonne">
          <i class="fa fa-check check_nbre_col"></i>
        </div>
        <button class="preview-link">Preview</button>
      </div>
      <div class="body-container">
        <div class="page-container">
        </div>
      </div>
      <div class="content-btn-register">
        <button class="btn-register">Enregistrer</button>
      </div>
    </div>
</div>