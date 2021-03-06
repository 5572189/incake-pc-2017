(function(window, document, $, undefined) {

    $(function() {

        // 顺序执行异步代码
        async.waterfall([
            function(next) {
                fnInitSurprise();
                next(null);
            },
            function(next) {
                fnInitRegular();
                next(null);
            },
            function(next) {
                fnInitPart();
                next(null);
            }
        ], function(err, result) {
            fnInitGlobalOperate();
            fnInitImageCropper();
            fnInitListParts();
        });

    });

    // init surprise data
    function fnInitSurprise() {
        var $page = $('#basketPage'),
            $listContainer = $page.find('.list-container');

        var _data = {
            list: [{
                uniqueId: _.uniqueId('inputImage_'),
                link: '/detail.html',
                thumbImg: '/assets/imgs/basket/thumb_cake.jpg',
                name: {
                    cn: '芒果拿破仑',
                    en: 'Mango Napoleon'
                },
                attr: ['附送餐具5套'],
                amount: 1,
                spec: '1.5磅',
                price: 189,
                privilege: '',
                operate: '<a href="javascript:;" class="btn-del-item">删除</a>'
            }, {
                uniqueId: _.uniqueId('inputImage_'),
                link: '/detail.html',
                thumbImg: '/assets/imgs/basket/thumb_cake.jpg',
                name: {
                    cn: '芒果拿破仑',
                    en: 'Mango Napoleon'
                },
                attr: ['附送餐具5套'],
                amount: 1,
                spec: '1.5磅',
                price: 189,
                privilege: '',
                operate: '<a href="javascript:;" class="btn-del-item">删除</a>'
            }, {
                uniqueId: _.uniqueId('inputImage_'),
                link: '/detail.html',
                thumbImg: '/assets/imgs/basket/thumb_cake.jpg',
                name: {
                    cn: '芒果拿破仑',
                    en: 'Mango Napoleon'
                },
                attr: ['附送餐具5套'],
                amount: 1,
                spec: '1.5磅',
                price: 189,
                privilege: '',
                operate: '<a href="javascript:;" class="btn-del-item">删除</a>',
                isSoldout: true
            }]
        };

        var _html = template('tplSurpriseList', _data);
        $listContainer.prepend(_html);

        // init surprise operate
        fnInitSurpriseOperate();
    }

    // func of init surprise operate
    function fnInitSurpriseOperate() {
        var $page = $('#basketPage'),
            $surprise = $page.find('.surprise-list');

        // view surprise
        $surprise.on('click', '.view-surprise', function(e) {
            var isActive = $(this).hasClass('active');
            if (!isActive) {
                $(this).addClass('active');
                $(this).next('.surprise-wrapper').slideDown();
            } else {
                $(this).removeClass('active');
                $(this).next('.surprise-wrapper').slideUp();
            }
        });

        // check on/off radio-box
        $surprise.on('click', '.radio-box p', function(e) {
            $(this)
                .addClass('checked')
                .parent('.radio-box')
                .siblings('.radio-box')
                .children('p')
                .removeClass('checked');

            // set the input focus if this item be other-box
            if ($(this).parent('.radio-box').hasClass('other-box')) {
                $(this).next('.txt-other').focus();
            }
        });

        // focus other input
        $surprise.on('focus', '.txt-other', function(e) {
            $(this)
                .prev('p')
                .addClass('checked')
                .parent('.radio-box')
                .siblings('.radio-box')
                .children('p')
                .removeClass('checked');
        });

        // maxlength setting about summary
        $surprise.find('.txt-summary').maxlength({
            max: 100,
            feedbackText: '还可输入{r}字'
        });
    }

    // init surprise data
    function fnInitRegular() {
        var $page = $('#basketPage'),
            $listContainer = $page.find('.list-container');

        var _data = {
            list: [{
                link: '/detail.html',
                thumbImg: '/assets/imgs/basket/thumb_cake.jpg',
                name: {
                    cn: '芒果拿破仑',
                    en: 'Mango Napoleon'
                },
                attr: ['附送餐具5套'],
                amount: 1,
                spec: '1.5磅',
                price: 189,
                privilege: '',
                operate: '<a href="javascript:;" class="btn-del-item">删除</a>'
            }, {
                uniqueId: _.uniqueId('inputImage_'),
                link: '/detail.html',
                thumbImg: '/assets/imgs/basket/thumb_image_cake.jpg',
                name: {
                    cn: '画影',
                    en: 'Image Cake'
                },
                attr: ['附送餐具5套'],
                amount: 1,
                spec: '1.5磅',
                price: 189,
                privilege: '',
                operate: '<a href="javascript:;" class="btn-del-item">删除</a>',
                isImageCake: true
            }, {
                uniqueId: _.uniqueId('inputImage_'),
                link: '/detail.html',
                thumbImg: '/assets/imgs/basket/thumb_image_cake.jpg',
                name: {
                    cn: '画影',
                    en: 'Image Cake'
                },
                attr: ['附送餐具5套'],
                amount: 1,
                spec: '1.5磅',
                price: 189,
                privilege: '',
                operate: '<a href="javascript:;" class="btn-del-item">删除</a>',
                isImageCake: true
            }, {
                link: '/detail.html',
                thumbImg: '/assets/imgs/basket/thumb_cake.jpg',
                name: {
                    cn: '芒果拿破仑',
                    en: 'Mango Napoleon'
                },
                attr: ['附送餐具5套'],
                amount: 1,
                spec: '1.5磅',
                price: 189,
                privilege: '',
                operate: '<a href="javascript:;" class="btn-del-item">删除</a>',
                isSoldout: true
            }]
        };

        var _html = template('tplRegularList', _data);
        if ($listContainer.children('.surprise-list').length > 0) {
            $(_html).insertAfter($listContainer.children('.surprise-list'));
        } else {
            $listContainer.prepend(_html);
        }

        // init regular operate
        fnInitRegularOperate();
    }

    // func of init regular operate
    function fnInitRegularOperate() {
        var $page = $('#basketPage'),
            $regular = $page.find('.regular-list');

        // upload image
        $regular.on('click', '.upload-img', function(e) {
            var isActive = $(this).hasClass('active');
            if (!isActive) {
                $(this).addClass('active');
                $(this).next('.upload-wrapper').slideDown();
            } else {
                $(this).removeClass('active');
                $(this).next('.upload-wrapper').slideUp();
            }
        });
    }

    // init part data
    function fnInitPart() {
        var $page = $('#basketPage'),
            $listContainer = $page.find('.list-container');

        var _data = {
            list: [{
                link: '/detail.html',
                thumbImg: '/assets/imgs/basket/thumb_cake.jpg',
                name: {
                    cn: '芒果拿破仑',
                    en: 'Mango Napoleon'
                },
                attr: ['-'],
                amount: 1,
                spec: '4只装',
                price: 189,
                privilege: '',
                operate: '<a href="javascript:;" class="btn-del-item">删除</a>'
            }, {
                link: '/detail.html',
                thumbImg: '/assets/imgs/basket/thumb_cake.jpg',
                name: {
                    cn: '芒果拿破仑',
                    en: 'Mango Napoleon'
                },
                attr: ['附送餐具5套'],
                amount: 1,
                spec: '1.5磅',
                price: 189,
                privilege: '',
                operate: '<a href="javascript:;" class="btn-del-item">删除</a>',
                isSoldout: true
            }]
        };

        var _html = template('tplPartList', _data);
        $listContainer.append(_html);
    }

    // func of init global operate
    function fnInitGlobalOperate() {
        var $page = $('#basketPage'),
            $basketContainer = $page.find('.basket-container'),
            $tipmsg = $('#tipMsg');

        // check on/off basket items
        $basketContainer.on('click', '.btn-ckbox', function(e) {
            var isChecked = $(this).hasClass('checked');
            if (!isChecked) {
                $(this).addClass('checked');
            } else {
                $(this).removeClass('checked');
            }
        });

        // 数量切换
        (function($wrap) {

            // 增加数量
            $wrap.find('.item').not('.soldout').on('click', '.btn-add', function(e) {
                var $input = $(this)
                    .prev('.amount-wrap')
                    .find('.txt-amount'),
                    amount = parseInt($input.val());
                amount++;
                if (amount > 1) {
                    $(this)
                        .siblings('.btn-sub')
                        .removeClass('disabled');
                }
                $input.val(amount);
            });

            // 减少数量
            $wrap.find('.item').not('.soldout').on('click', '.btn-sub', function(e) {
                if ($(this).hasClass('disabled')) {
                    return false;
                }
                var $input = $(this)
                    .next('.amount-wrap')
                    .find('.txt-amount'),
                    amount = parseInt($input.val());
                amount--;
                if (amount <= 1) {
                    $(this).addClass('disabled');
                }
                $input.val(amount);
            });
        })($basketContainer);

        // 删除商品
        $basketContainer.on('click', '.btn-del-item', function(e) {
            var $item = $(this).closest('.item'),
                $list = $item.parent('ul');

            // TODO 删除提示

            // 删除之前，当前列表只剩一个商品，当前列表也删除
            if ($list.find('.item').length == 1) {
                $list.remove();
            }

            $item.remove();
        });

        // 优惠购
        (function($wrap) {
            var $view = $wrap.find('.view-privilege');

            // toggle wrap
            $view.on('click', '>p', function(e) {
                var isActive = $(this).hasClass('active');
                if (!isActive) {
                    $(this)
                        .addClass('active')
                        .next('.privilege-wrap')
                        .fadeIn();
                } else {
                    $(this)
                        .removeClass('active')
                        .next('.privilege-wrap')
                        .fadeOut();
                }
            });

            // close wrap
            $view.on('click', '.close-privilege-wrap', function(e) {
                var $privilegeWrap = $(this).parent('.privilege-wrap'),
                    $paragraph = $privilegeWrap.prev('p');

                $privilegeWrap.fadeOut();
                $paragraph.removeClass('active');
            });

            // checked privilege
            $view.on('click', '.btn-ckbox-p', function(e) {
                var isChecked = $(this).hasClass('checked');
                if (!isChecked) {
                    $(this).addClass('checked');
                } else {
                    $(this).removeClass('checked');
                }
            });

            // remove privilege
            $view.on('click', '.btn-del-p', function(e) {
                var $item = $(this).closest('li'),
                    $list = $(this).closest('.privilege-list');

                // TODO 删除提示

                // 删除之前，当前列表只剩一个商品，当前列表也删除
                if ($list.find('li').length == 1) {
                    $list.closest('.view-privilege').remove();
                }

                $item.remove();
            });
        })($basketContainer);


        // handle for submit order
        $basketContainer.on('click', '.btn-settle', function(e) {

            // TODO 验证惊喜表单合法性
            var isSurprisePassed = true,
                isImageCakePassed = false;

            var _htmlBody = '',
                _htmlFooter = '';

            _htmlBody += '<p>小IN想对您说：</p>';

            if (!isSurprisePassed) {
                _htmlBody += '<p>您挑选的是惊喜款蛋糕，但是还没有添加惊喜哟，快去打包惊喜吧！</p>';
                _htmlFooter += '<a href="javascript:;">现在去填写惊喜</a>';
            } else if (!isImageCakePassed) {
                _htmlBody += '<p>您挑选的画影蛋糕还没设置照片哦，现在就去上传照片吧！</p>';
                _htmlFooter += '<a href="javascript:;">现在去上传照片</a>';
            }

            $tipmsg
                .show()
                .find('.container-body')
                .children('.vcenter-child')
                .html(_htmlBody)
                .end()
                .next()
                .html(_htmlFooter);
        });

        // Close tipmsg
        $tipmsg.on('click', '.container-footer a', function(e) {
            $tipmsg.hide();
        });
    }

    // handle for image cropper
    function fnInitImageCropper() {
        var $page = $('#basketPage'),
            $imgCropper = $('#imgCropper'),
            $body = $imgCropper.find('.container-body'),
            $image = $body.find('.image'),
            $footer = $imgCropper.find('.container-footer'),
            $imgPreview = $('#imgPreview'),
            $previewBody = $imgPreview.find('.container-body'),
            $previewFooter = $imgPreview.find('.container-footer'),
            $inputImage, $inputPreview;

        var options = {
            aspectRatio: 1 / 1,
            preview: '.img-preview'
        };

        // init cropper
        $image.cropper(options);
        // Methods
        $footer.on('click', '.zoom-in', function(e) {
            // Zoom in
            $image.cropper("zoom", 0.1);
        }).on('click', '.zoom-out', function(e) {
            // Zoom out
            $image.cropper("zoom", -0.1);
        }).on('click', '.btn-cut', function(e) {
            // Get cropped image
            var img = $image.cropper('getCroppedCanvas', {
                width: 600,
                height: 600
            }).toDataURL('image/jpeg');
            var thumbImg = $image.cropper('getCroppedCanvas', {
                width: 90,
                height: 90
            }).toDataURL('image/jpeg');

            if (!!$inputImage) {
                var imgType = $inputImage.attr('data-imgtype');
                var uid = _.uniqueId('reuploadImage_');
                if (imgType == 'surprise') {
                    var _html = '';
                    _html += '<div class="img uploaded">';
                    _html += '<img src="' + thumbImg + '" data-image="' + img + '">';
                    _html += '<a href="javascript:;" class="btn-preview" data-imgtype="surprise"></a>';
                    _html += '</div>';
                    _html += '<div class="text">';
                    _html += '<p>有照片有惊喜！(非必填)</p>';
                    _html += '<div class="btns clearfix">';
                    _html += '<label for="' + uid + '" class="btn btn-reupload">';
                    _html += '<span>重新上传</span>';
                    _html += '<input type="file" class="sr-only reupload-image" data-imgtype="surprise" id="' + uid + '" accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff">';
                    _html += '</label>';
                    _html += '<a href="javascript:;" class="btn-del-image">删除</a>';
                    _html += '</div></div>';
                    $inputImage
                        .closest('.upload-wrap')
                        .html(_html);
                } else if (imgType == 'imagecake') {
                    var _html = '';
                    _html += '<div class="img uploaded">';
                    _html += '<img src="' + thumbImg + '" data-image="' + img + '">';
                    _html += '<a href="javascript:;" class="btn-preview" data-imgtype="imagecake"></a>';
                    _html += '</div>';
                    _html += '<div class="text">';
                    _html += '<p>请上传一张照片，我们会美美的安放在画影上哦～</p>';
                    _html += '<label for="' + uid + '" class="btn btn-reupload">';
                    _html += '<span>重新上传</span>';
                    _html += '<input type="file" class="sr-only reupload-image" data-imgtype="imagecake" id="' + uid + '" accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff">';
                    _html += '</label>';
                    _html += '</div>';

                    var _beforeHtml = '';
                    _beforeHtml += '<p class="preview-box clearfix">';
                    _beforeHtml += '<span>已上传1张照片</span></p>';

                    var $uploadImg = $inputImage
                        .closest('.upload-wrapper')
                        .prev();

                    if ($uploadImg.prev('.preview-box').length != 0) {
                        $uploadImg
                            .prev('.preview-box')
                            .remove()
                            .end()
                            .before(_beforeHtml);
                    } else {
                        $uploadImg
                            .html('重新上传')
                            .before(_beforeHtml);
                    }

                    $inputImage
                        .closest('.upload-container')
                        .html(_html);
                }
            }

            // hide image cropper
            $imgCropper.hide();
        });

        // Import/Reupload image
        $page.on('click', '.import-image, .reupload-image', function(e) {
            $inputImage = $(this);
            var URL = window.URL || window.webkitURL;
            var blobURL;

            if (URL) {
                $inputImage.change(function() {
                    var files = this.files;
                    var file;

                    if (!$image.data('cropper')) {
                        return;
                    }

                    if (files && files.length) {
                        file = files[0];

                        if (/^image\/\w+$/.test(file.type)) {
                            blobURL = URL.createObjectURL(file);
                            $image.one('built.cropper', function() {

                                // Revoke when load complete
                                URL.revokeObjectURL(blobURL);
                            }).cropper('reset').cropper('replace', blobURL);
                            $inputImage.val('');
                            // show imgcropper container
                            $imgCropper.show();
                        } else {
                            window.alert('Please choose an image file.');
                        }
                    }
                });
            }
        });

        // delete uploaded image
        $page.on('click', '.btn-del-image', function(e) {
            var $uploadWrap = $(this).closest('.upload-wrap');
            var uid = _.uniqueId('inputImage_');
            var _html = '';
            _html += '<div class="img">';
            _html += '<img src="assets/imgs/basket/img_default.jpg" alt="">';
            _html += '</div>';
            _html += '<div class="text">';
            _html += '<p>有照片有惊喜！(非必填)</p>';
            _html += '<div class="btns clearfix">';
            _html += '<label for="' + uid + '" class="btn btn-upload">';
            _html += '<span>上传定制照片</span>';
            _html += '<input type="file" class="sr-only import-image" data-imgtype="surprise" id="' + uid + '" accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff">';
            _html += '</label></div></div>';
            $uploadWrap.html(_html);
        });

        // Close mask image cropper
        $imgCropper.on('click', '.close-imgcropper', function(e) {
            $imgCropper.hide();
        });

        // Reload image
        (function($image) {
            var $reloadImage = $('#reloadImage');
            var URL = window.URL || window.webkitURL;
            var blobURL;

            if (URL) {
                $reloadImage.change(function() {
                    var files = this.files;
                    var file;

                    if (!$image.data('cropper')) {
                        return;
                    }

                    if (files && files.length) {
                        file = files[0];

                        if (/^image\/\w+$/.test(file.type)) {
                            blobURL = URL.createObjectURL(file);
                            $image.one('built.cropper', function() {

                                // Revoke when load complete
                                URL.revokeObjectURL(blobURL);
                            }).cropper('reset').cropper('replace', blobURL);
                            $reloadImage.val('');
                        } else {
                            window.alert('Please choose an image file.');
                        }
                    }
                });
            }
        })($image);

        /* ====================================
         * Preview Images
         * ====================================
         */

        // preview image
        $page.on('click', '.btn-preview', function(e) {
            var imgtype = $(this).attr('data-imgtype');
            var _html = '';
            var $img = $(this).prev('img');
            var imgSrc = $img.attr('data-image');
            $inputImage = $(this)
                .closest('.img')
                .next('.text')
                .find('.reupload-image');

            if (imgtype == 'surprise') {
                _html += '<img class="image" src="' + imgSrc + '" alt="">';
            } else if (imgtype == 'imagecake') {
                _html += '<div class="imagecake-wrapper">';
                _html += '<img class="image" src="' + imgSrc + '" alt="">';
                _html += '</div>';
            }

            $imgPreview.show();
            $previewBody.html(_html);
        });

        // Close mask image preview
        $previewFooter.on('click', '.close-imgpreview', function(e) {
            $imgPreview.hide();
        });

        // reupload image from mask preview
        $previewFooter.on('click', '.reload-preview', function(e) {
            $inputPreview = $(this);
            var URL = window.URL || window.webkitURL;
            var blobURL;

            if (URL) {
                $inputPreview.change(function() {
                    var files = this.files;
                    var file;

                    if (!$image.data('cropper')) {
                        return;
                    }

                    if (files && files.length) {
                        file = files[0];

                        if (/^image\/\w+$/.test(file.type)) {
                            blobURL = URL.createObjectURL(file);
                            $image.one('built.cropper', function() {

                                // Revoke when load complete
                                URL.revokeObjectURL(blobURL);
                            }).cropper('reset').cropper('replace', blobURL);
                            $inputPreview.val('');
                            // hide imgpreview 
                            $imgPreview.hide();
                            // show imgcropper container
                            $imgCropper.show();
                        } else {
                            window.alert('Please choose an image file.');
                        }
                    }
                });
            }
        });
    }

    // init list parts data
    function fnInitListParts() {
        var $wrapper = $('#partsWrapper'),
            $nav = $wrapper.find('.categories-nav'),
            $body = $wrapper.find('.categories-body'),
            $btnPrev = $body.find('.btn-prev'),
            $btnNext = $body.find('.btn-next'),
            $listParts = $body.find('.list-parts'),
            liW = 260,
            liML = 10,
            viewNum = 4,
            iLeft = 0,
            maxW = 0,
            len = 0;

        // 默认初始化时传入数字蜡烛数据
        handle4InitList('candles');

        /**
         * ==================================
         * Methods
         * ==================================
         */

        // switch nav
        $nav.on('click', 'li', function(e) {
            var target = $(this).attr('data-target');
            handle4InitList(target);
            $(this)
                .addClass('active')
                .siblings()
                .removeClass('active');
        });

        // handle for next slide
        $btnNext.on('click', function(e) {
            if (!$(this).hasClass('active')) {
                return false;
            }
            iLeft += (liW + liML);
            if (iLeft >= maxW) {
                iLeft = maxW;
                $(this).removeClass('active');
            }
            $listParts.animate({
                left: -iLeft + 'px'
            });
            if (len > 4 && !$btnPrev.hasClass('active')) {
                $btnPrev.addClass('active');
            }
        });

        // handle for previous slide
        $btnPrev.on('click', function(e) {
            if (!$(this).hasClass('active')) {
                return false;
            }
            iLeft -= (liW + liML);
            if (iLeft <= 0) {
                iLeft = 0;
                $(this).removeClass('active');
            }
            $listParts.animate({
                left: -iLeft + 'px'
            });
            if (len > 4 && !$btnNext.hasClass('active')) {
                $btnNext.addClass('active');
            }
        });

        /**
         * ==================================
         * Handles
         * ==================================
         */

        // handle for init list
        function handle4InitList(target) {

            // 数字蜡烛模拟数据
            var candlesData = {
                list: [{
                    link: '/detail.html',
                    img: '/assets/imgs/list/cake_01.jpg',
                    name: {
                        cn: '芒果拿破仑',
                        en: 'Mango Napoleon'
                    },
                    spec: '4只装',
                    price: 189
                }, {
                    link: '/detail.html',
                    img: '/assets/imgs/list/cake_02.jpg',
                    name: {
                        cn: '芒果拿破仑',
                        en: 'Mango Napoleon'
                    },
                    spec: '1.5磅',
                    price: 189
                }, {
                    link: '/detail.html',
                    img: '/assets/imgs/list/cake_03.jpg',
                    name: {
                        cn: '芒果拿破仑',
                        en: 'Mango Napoleon'
                    },
                    spec: '1.5磅',
                    price: 189
                }, {
                    link: '/detail.html',
                    img: '/assets/imgs/list/cake_04.jpg',
                    name: {
                        cn: '芒果拿破仑',
                        en: 'Mango Napoleon'
                    },
                    spec: '1.5磅',
                    price: 189
                }, {
                    link: '/detail.html',
                    img: '/assets/imgs/list/cake_01.jpg',
                    name: {
                        cn: '芒果拿破仑',
                        en: 'Mango Napoleon'
                    },
                    spec: '4只装',
                    price: 189
                }, {
                    link: '/detail.html',
                    img: '/assets/imgs/list/cake_02.jpg',
                    name: {
                        cn: '芒果拿破仑',
                        en: 'Mango Napoleon'
                    },
                    spec: '1.5磅',
                    price: 189
                }, {
                    link: '/detail.html',
                    img: '/assets/imgs/list/cake_03.jpg',
                    name: {
                        cn: '芒果拿破仑',
                        en: 'Mango Napoleon'
                    },
                    spec: '1.5磅',
                    price: 189
                }, {
                    link: '/detail.html',
                    img: '/assets/imgs/list/cake_04.jpg',
                    name: {
                        cn: '芒果拿破仑',
                        en: 'Mango Napoleon'
                    },
                    spec: '1.5磅',
                    price: 189
                }]
            };

            // 餐盘模拟数据
            var platesData = {
                list: [{
                    link: '/detail.html',
                    img: '/assets/imgs/list/cake_04.jpg',
                    name: {
                        cn: '芒果拿破仑',
                        en: 'Mango Napoleon'
                    },
                    spec: '4只装',
                    price: 189
                }, {
                    link: '/detail.html',
                    img: '/assets/imgs/list/cake_03.jpg',
                    name: {
                        cn: '芒果拿破仑',
                        en: 'Mango Napoleon'
                    },
                    spec: '1.5磅',
                    price: 189
                }, {
                    link: '/detail.html',
                    img: '/assets/imgs/list/cake_02.jpg',
                    name: {
                        cn: '芒果拿破仑',
                        en: 'Mango Napoleon'
                    },
                    spec: '1.5磅',
                    price: 189
                }]
            };

            // TODO 上线时需要通过AJAX从后台拉取
            switch(target) {
                case 'candles':
                    _data = candlesData;
                    break;
                case 'plates':
                    _data = platesData;
                    break;
                default:
                    _data = candlesData;
                    break;
            }

            // set list position left to 0
            $listParts.css({
                left: 0
            });

            len = _data.list.length;
            maxW = (len - viewNum) * (liW + liML);
            $listParts.width((liW + liML) * len);

            // reset previous button style
            if ($btnPrev.hasClass('active')) {
                $btnPrev.removeClass('active');
            }

            // reset next button style
            if (len > 4) {
                $btnNext.addClass('active');
            } else {
                if ($btnNext.hasClass('active')) {
                    $btnNext.removeClass('active');
                }
            }

            var _html = template('tplListParts', _data);
            $listParts.append(_html);
        }
    }

})(window, document, jQuery);
